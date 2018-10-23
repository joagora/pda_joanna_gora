### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

#the naming convention is not followed, the name of the function should be camelCase
  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

#spelling mistake in the word def
#indentation is incorrect, which decreases readability
#missing comma in parameters
  dif highest_card(card1 card2)
  if card1.value > card2.value
    #the card variable is not declared
    return card.name
  else
    #missing return statement, although return is implicit in Ruby, the use of returns is not consistent
    card2
  end
end
# the class is closed here, the end keyword should be after the self.cards_total(cards) is ended
end

def self.cards_total(cards)
  #the variable total should be assigned to a value 0
  total
  for card in cards
    total += card.value
    # the return statement should not be in this place
    return "You have a total of" + total
  end
  #the return statement calculating the total should be here, after the iteration is finished
end

#the CardGame class should end here
```
