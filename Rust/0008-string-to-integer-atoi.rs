pub fn my_atoi(s: String) -> i32 {
    let chars: Vec<char> = s.chars().collect();
    let mut i = 0;
    let n = chars.len();
    let mut sign = 1;
    let mut num: i32 = 0;

    const INT_MAX: i32 = i32::MAX; //  2_147_483_647
    const INT_MIN: i32 = i32::MIN; // -2_147_483_648

    // 1. Skip leading whitespace
    while i < n && chars[i].is_whitespace() {
        i += 1;
    }

    // 2. Handle optional sign
    if i < n {
        if chars[i] == '-' {
            sign = -1;
            i += 1;
        } else if chars[i] == '+' {
            i += 1;
        }
    }

    // 3. Parse digits
    while i < n && chars[i].is_ascii_digit() {
        let digit = chars[i].to_digit(10).unwrap() as i32;

        // 4. Handle overflow
        if num > (INT_MAX - digit) / 10 {
            return if sign == 1 { INT_MAX } else { INT_MIN };
        }

        num = num * 10 + digit;
        i += 1;
    }

    sign * num
}
