def eat_ghost(power_pellet_active, touching_ghost):
    if power_pellet_active and touching_ghost:
        return True
    return False


def score(touching_power_pellet, touching_dot):
    if touching_power_pellet or touching_dot:
        return True
    return False


def lose(power_pellet_active, touching_ghost):
    if touching_ghost and not power_pellet_active:
        return True
    return False


def win(has_eaten_all_dots, power_pellet_active, touching_ghost):
    if has_eaten_all_dots and not lose(power_pellet_active, touching_ghost):
        return True
    return False
