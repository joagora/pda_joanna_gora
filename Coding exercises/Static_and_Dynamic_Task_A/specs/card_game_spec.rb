require('minitest/autorun')
require_relative('../testing_task_2.rb')
require_relative('../card.rb')

class TestCardGame < MiniTest::Test

  def setup
    @cardGame = CardGame.new()
    @aceOfTwo = Card.new("Ace", 2)
  end

  def test_card_is_ace
    expected = true
    actual = @cardGame.checkForAce(@aceOfTwo)
    assert_equal(expected, actual)
  end





end
