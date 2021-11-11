def exchange_money(budget, exchange_rate):
    return budget / exchange_rate

def get_change(budget, exchanging_value):
    return budget - exchanging_value


def get_value_of_bills(denomination, number_of_bills):
    return denomination * number_of_bills


def get_number_of_bills(budget, denomination):
    return budget // denomination


def exchangeable_value(budget, exchange_rate, spread, denomination):
    exchange_value = exchange_money(budget, exchange_rate * (1.0 + spread / 100))
    bills = get_number_of_bills(exchange_value, denomination)
    return get_value_of_bills(denomination, bills)



def non_exchangeable_value(budget, exchange_rate, spread, denomination):
    full_value = exchange_money(budget, exchange_rate * (1.0 + spread / 100))
    exchangeable = exchangeable_value(budget, exchange_rate, spread, denomination)
    return int(full_value - exchangeable)
