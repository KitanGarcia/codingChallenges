def add_prefix_un(word):
    return "un" + word


def make_word_groups(vocab_words):
    return f' :: {vocab_words[0]}'.join(vocab_words)


def remove_suffix_ness(word):
    new_word = word
    if new_word[-4:] == "ness":
        new_word = new_word[:-4]
        if new_word[-1] == "i":
            return new_word[0:-1] + "y"
    return new_word



def noun_to_verb(sentence, index):
    return sentence.replace(".", "").split(" ")[index] + "en"