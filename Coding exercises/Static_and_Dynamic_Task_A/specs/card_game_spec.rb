require('minitest/autorun')
require_relative('../testing_task_2.rb')
require_relative('../card.rb')

class TestCardGame < MiniTest::Test

  def setup
    @cardGame = CardGame.new()
    @threeOfSpades = Card.new("Ace", "3")
    @aceOfHearts = Card.new("Hearts", "Ace")
    @fiveOfSpades = Card.new("Spades", "5")
  end

  def test_card_is_ace
    expected = true
    actual = @cardGame.checkForAce(@aceOfHearts)
    assert_equal(expected, actual)
  end

  def test_card_is_not_ace
    expected = false
    actual = @cardGame.checkForAce(@threeOfSpades)
    assert_equal(expected, actual)
  end

  def test_can_get_highest_card
    expected = @fiveOfSpades
    actual = @cardGame.highest_card(@threeOfSpades, @fiveOfSpades)
    assert_equal(expected, actual)
  end

  def test_can_calculate_total
    expected = "You have a total of 8"
    actual = CardGame.cards_total([@fiveOfSpades, @threeOfSpades])
    assert_equal(expected, actual)
  end



end
