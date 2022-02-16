""" Meltdown Mitigation exercise """


def is_criticality_balanced(temperature, neutrons_emitted):
    if temperature < 800 and neutrons_emitted > 500 and temperature * neutrons_emitted < 500000:
        return True

    return False


def reactor_efficiency(voltage, current, theoretical_max_power):
    generated_power = voltage * current
    efficiency = 100 * generated_power / theoretical_max_power
    if efficiency >= 80:
        return "green"
    if 60 <= efficiency and efficiency < 80:
        return "orange"
    if 30 <= efficiency and efficiency < 60:
        return "red"
    return "black"

def fail_safe(temperature, neutrons_produced_per_second, threshold):
    product = temperature * neutrons_produced_per_second
    if product < .9 * threshold:
        return "LOW"
    if .9 * threshold <= product and product <= 1.1 * threshold:
        return "NORMAL"
    return "DANGER"
