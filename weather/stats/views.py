import datetime as dt

from django.shortcuts import get_object_or_404, render

from .forms import StatisticForm
from .models import City
from .utils import get_statistics


def index(request):
    """
    Display the input form, in the case of a post request, displays statistics
     :model:`stats.Record`.

    **Template:**
    :template:`templates/index.html`
    """
    form = StatisticForm(request.POST or None)
    if form.is_valid():
        form = form.cleaned_data
        city = get_object_or_404(City, id=form['city'])
        start = form['start_date']
        end = form['end_date'] + dt.timedelta(days=1)
        records = city.city_record.filter(date__range=(start, end))
        statistic = get_statistics(
            records,
            (end - start).days > 730,
            city.name
        )
        return render(request, 'stats/statistic.html', {
            'start_date': form['start_date'],
            'end_date': form['end_date'],
            'city': city.name,
            'period_temp_min': statistic[0],
            'period_temp_max': statistic[1],
            'period_temp_avg': statistic[2],
            'years_stats': statistic[3],
            'close_date': statistic[4],
            'clear_days': statistic[5],
            'frequent_prec': statistic[6],
            'wind_direction_avg': statistic[7],
            'wind_speed_avg': statistic[8],
            'records_count': records.count()
        })
    return render(request, 'stats/index.html', {'form': form})
