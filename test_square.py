from unittest import TestCase
from square import square

class Test(TestCase):
    def test_square_2(self):
        ''' tesing square of 2 '''
        self.assertEqual(square(2),4)

    def test_square_5(self):
        ''' tesing square of 5 '''
        self.assertEqual(square(5),25)
