
class Card
  attr_reader :suit, :value
#the indentation is incorrect, the constructor should be indented
def initialize(suit, value)
  #a semicolon missing at the end of line 7
  @suit = suit
  @value = value;
end
end
