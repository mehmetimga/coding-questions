impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        if strs.is_empty() {
            return "".to_string();
        }

        let mut result = String::new();
        let first = strs[0].as_bytes();

        for j in 0..first.len() {
            let c = first[j];

            for i in 1..strs.len() {
                let current = strs[i].as_bytes();
                if j >= current.len() || current[j] != c {
                    return result;
                }
            }

            result.push(c as char);
        }

        result
    }
}
