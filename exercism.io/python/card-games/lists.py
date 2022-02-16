import math

def get_rounds(number):
    rounds = []
    for i in range(3):
        rounds.append(number + i)
    return rounds


def concatenate_rounds(rounds_1, rounds_2):
    return rounds_1 + rounds_2


def list_contains_round(rounds, number):
    if number in rounds:
        return True
    return False


def card_average(hand):
    sum = 0
    for number in hand:
       sum += number
    return sum / len(hand)


def approx_average_is_average(hand):
    avg_1 = 0
    median = 0

    if len(hand) % 2 == 1:
        median = hand[math.floor(len(hand)/2)]

    if median == card_average(hand):
        return True

    avg1 = (hand[0] + hand[-1]) / 2
    if avg1 == card_average(hand):
        return True

    return False


def average_even_is_average_odd(hand):
    even_count = 0
    even_sum = 0
    odd_count = 0
    odd_sum = 0

    for i in range(len(hand)):
        if i % 2 == 0:
            even_sum += hand[i]
            even_count += 1
        else:
            odd_sum += hand[i]
            odd_count += 1

    if even_sum / even_count == odd_sum / odd_count:
        return True

    return False


def maybe_double_last(hand):
    if hand[-1] == 11:
        hand[-1] *= 2
    return hand
