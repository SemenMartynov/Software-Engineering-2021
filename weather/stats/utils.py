import requests
from django.db.models import Avg, F, Func, Max, Min, QuerySet
from django.db.models.functions import TruncYear


def get_statistics(records: QuerySet, years_stats: bool, city: str):
    """
    Gathers statistics on QuerySet from all individual methods.

    **input**
    ``records``
        QuerySet: of :model:`stats.Record`.
    ``years_stats``
        Bool: which answers the question:
        'is the sample more than two years old?'.
    ``city``
        String: representation of city name.

    **output:**
    List: of statistics
    """
    results = []
    [results.append(res) for res in get_temp_stats(records, years_stats, city)]
    return results


def get_temp_stats(records: QuerySet, two_year: bool, city: str):
    """
    Calculates statistics on temperature in QuerySet.

    **input**
    ``records``
        QuerySet: of :model:`stats.Record`.
    ``two_year``
        Bool: which answers the question:
        'is the sample more than two years old?'.
    ``city``
        String: representation of city name.

    **output:**
    ''period_temp_min''
        Float: minimum temperature for the period.
    ''period_temp_max''
        Float: maximum temperature for the period.
    ''period_temp_avg''
        Float: average temperature for the period.
    ''years_stats''
        List or None: of years statistics.
            ''min_year__avg''
                Float: of average minimum over the years.
            ''max_year__avg''
                Float: of average maximum over the years.
    ''close_date''
        Record: of day the temperature was closest to today's temperature.
    """
    period_stats = records.aggregate(
        Min('temperature'),
        Max('temperature'),
        Avg('temperature')
    )
    if two_year:
        years_stats = (
            records.annotate(year=TruncYear('date'))
            .values('year')
            .annotate(min_year=Min('temperature'), max_year=Max('temperature'))
            .aggregate(Avg('min_year'), Avg('max_year'))
        )
    try:
        temp_today = float(
            requests.get(f'https://wttr.in/{city}?format=%t').text[:-2]
        )
        close_date = (
            records.only('temperature')
            .annotate(abs_diff=Func(
                F('temperature') - temp_today, function='ABS'
            ))
            .order_by('abs_diff').first())
    except requests.exceptions.RequestException:
        close_date = None
    return (
        period_stats['temperature__min'],
        period_stats['temperature__max'],
        round(period_stats['temperature__avg'], 3),
        [round(years_stats['min_year__avg'], 3),
         round(years_stats['max_year__avg'], 3)] if two_year else None,
        close_date
    )

