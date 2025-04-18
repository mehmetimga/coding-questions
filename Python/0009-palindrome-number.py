class Solution:
    def isPalindrome(self, x: int) -> bool:
        # Negative numbers and numbers ending with 0 (except 0 itself) cannot be palindromes
        if x < 0 or (x % 10 == 0 and x != 0):
            return False
        
        reversed_half = 0
        # Reverse the second half of the number and compare with the first half
        while x > reversed_half:
            reversed_half = reversed_half * 10 + x % 10
            x //= 10
        
        # Return true if the first half equals the reversed second half
        # or if the first half equals the reversed second half without the middle digit (for odd-length numbers)
        return x == reversed_half or x == reversed_half // 10
