EXPECTED_BAKE_TIME = 40


def bake_time_remaining(elapsed_bake_time):
    """
    Calculate remaining bake time
    """
    return EXPECTED_BAKE_TIME - elapsed_bake_time


def preparation_time_in_minutes(num_layers):
    """
    Calculate prep time in minutes
    """
    return 2 * num_layers


def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """
    Calculate elapsed time
    """
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
