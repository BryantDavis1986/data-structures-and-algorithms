function pangrams(s) {
    return new Set(s.toLowerCase()).size > 26 ? "pangram":"not pangram";
    
    }