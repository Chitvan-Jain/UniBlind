const trendyAdjectives = ["Lit", "Extra", "Salty", "Bougie", "Woke", "Cheugy", "Simp", "Vibey", "Fam", "Savage", "Basic", "Bae", "Fleek", "GOAT", "Slay", "Thicc", "Yeet", "Flex", "Gucci", "Sick", "Snatched", "Swag", "Thirsty", "Turnt", "Wavy", "Yass", "Zaddy", "Blessed", "Clout", "Fam", "FOMO", "Glow", "Hundo", "JOMO", "Lit", "Mood", "Noob", "Savage", "Shook", "Slay", "Snack", "Stan", "Tea", "Thirsty", "Vibes", "Woke", "Yeet", "Boujee", "Extra", "Fam", "Flex", "GOAT", "Gucci", "Hundo", "JOMO", "Lit", "Mood", "Noob", "Savage", "Shook", "Slay", "Snack", "Stan", "Tea", "Thirsty", "Vibes", "Woke", "Yeet", "Boujee", "Extra", "Fam", "Flex", "GOAT", "Gucci", "Hundo", "JOMO", "Lit", "Mood", "Noob", "Savage", "Shook", "Slay", "Snack", "Stan", "Tea", "Thirsty", "Vibes", "Woke", "Yeet", "Boujee", "Extra", "Fam", "Flex", "GOAT", "Gucci", "Hundo", "JOMO", "Lit", "Mood", "Noob", "Savage", "Shook", "Slay", "Snack", "Stan", "Tea", "Thirsty", "Vibes", "Woke", "Yeet", "Boujee", "Extra", "Fam", "Flex", "GOAT", "Gucci", "Hundo", "JOMO", "Lit", "Mood", "Noob", "Savage", "Shook", "Slay", "Snack", "Stan", "Tea", "Thirsty", "Vibes", "Woke", "Yeet", "Boujee", "Extra", "Fam", "Flex", "GOAT", "Gucci", "Hundo", "JOMO", "Lit", "Mood", "Noob", "Savage", "Shook", "Slay", "Snack", "Stan", "Tea", "Thirsty", "Vibes", "Woke", "Yeet", "Boujee", "Extra", "Fam", "Flex", "GOAT", "Gucci", "Hundo", "JOMO", "Lit", "Mood", "Noob", "Savage", "Shook", "Slay", "Snack", "Stan", "Tea", "Thirsty", "Vibes", "Woke", "Yeet", "Boujee", "Extra", "Fam", "Flex", "GOAT", "Gucci", "Hundo", "JOMO", "Lit", "Mood", "Noob", "Savage", "Shook", "Slay", "Snack", "Stan", "Tea", "Thirsty", "Vibes", "Woke", "Yeet", "Boujee", "Extra", "Fam", "Flex", "GOAT", "Gucci", "Hundo", "JOMO", "Lit", "Mood", "Noob", "Savage", "Shook", "Slay", "Snack", "Stan", "Tea", "Thirsty", "Vibes", "Woke", "Yeet", "Boujee", "Extra", "Fam", "Flex", "GOAT", "Gucci", "Hundo", "JOMO", "Lit", "Mood", "Noob", "Savage", "Shook", "Slay", "Snack", "Stan", "Tea", "Thirsty", "Vibes", "Woke", "Yeet", "Boujee", "Extra", "Fam", "Flex", "GOAT", "Gucci", "Hundo", "JOMO", "Lit", "Mood", "Noob", "Savage", "Shook", "Slay", "Snack", "Stan", "Tea", "Thirsty", "Vibes"];
// const insideJokes = ["RamenFueled", "FinalsWeekZombie", "ProfSaysWhat", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "RamenFueled", "FinalsWeekZombie", "ProfSaysWhat", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "RamenFueled", "FinalsWeekZombie", "ProfSaysWhat", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "RamenFueled", "FinalsWeekZombie", "ProfSaysWhat", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "RamenFueled", "FinalsWeekZombie", "ProfSaysWhat", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "RamenFueled", "FinalsWeekZombie", "ProfSaysWhat", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "RamenFueled", "FinalsWeekZombie", "ProfSaysWhat", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "RamenFueled", "FinalsWeekZombie", "ProfSaysWhat", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "RamenFueled", "FinalsWeekZombie", "ProfSaysWhat", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "RamenFueled", "FinalsWeekZombie", "ProfSaysWhat", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "RamenFueled", "FinalsWeekZombie", "ProfSaysWhat", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "RamenFueled", "FinalsWeekZombie", "ProfSaysWhat", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen", "NapTimeNinja", "RamenFueled", "FinalsWeekZombie", "ProfSaysWhat", "SyllabusStruggles", "LabPartnerLuv", "CaffeineQueen"];
// const obscureWords = ["Ephemeral", "Serendipitous", "Quixotic", "Mellifluous", "Petrichor", "Limerence", "Ephemeral", "Serendipitous", "Quixotic", "Mellifluous", "Petrichor", "Limerence", "Ephemeral", "Serendipitous", "Quixotic", "Mellifluous", "Petrichor", "Limerence", "Ephemeral", "Serendipitous", "Quixotic", "Mellifluous", "Petrichor", "Limerence", "Ephemeral", "Serendipitous", "Quixotic", "Mellifluous", "Petrichor", "Limerence", "Ephemeral", "Serendipitous", "Quixotic", "Mellifluous", "Petrichor", "Limerence", "Ephemeral", "Serendipitous", "Quixotic", "Mellifluous", "Petrichor", "Limerence", "Ephemeral", "Serendipitous", "Quixotic", "Mellifluous", "Petrichor", "Limerence", "Ephemeral", "Serendipitous", "Quixotic", "Mellifluous", "Petrichor", "Limerence", "Ephemeral", "Serendipitous", "Quixotic", "Mellifluous", "Petrichor", "Limerence", "Ephemeral", "Serendipitous", "Quixotic", "Mellifluous", "Petrichor", "Limerence", "Ephemeral", "Serendipitous", "Quixotic", "Mellifluous", "Petrichor", "Limerence", "Ephemeral", "Serendipitous", "Quixotic", "Mellifluous", "Petrichor", "Limerence", "Ephemeral", "Serendipitous", "Quixotic" ];
// const adjactive = ["Adorable", "Adventurous", "Aggressive", "Agreeable", "Alert", "Alive", "Amused", "Angry", "Annoyed", "Annoying", "Anxious", "Arrogant", "Ashamed", "Attractive", "Average", "Awful", "Bad", "Beautiful", "Better", "Bewildered", "Black", "Bloody", "Blue", "Blue-eyed", "Blushing", "Bored", "Brainy", "Brave", "Breakable", "Bright", "Busy", "Calm", "Careful", "Cautious", "Charming", "Cheerful", "Clean", "Clear", "Clever", "Cloudy", "Clumsy", "Colorful", "Combative", "Comfortable", "Concerned", "Condemned", "Confused", "Cooperative", "Courageous", "Crazy", "Creepy", "Crowded", "Cruel", "Curious", "Cute", "Dangerous", "Dark", "Dead", "Defeated", "Defiant", "Delightful", "Depressed", "Determined", "Different", "Difficult", "Disgusted", "Distinct", "Disturbed", "Dizzy", "Doubtful", "Drab", "Dull", "Eager", "Easy", "Elated", "Elegant", "Embarrassed", "Enchanting", "Encouraging", "Energetic", "Enthusiastic", "Envious", "Evil", "Excited", "Expensive", "Exuberant", "Fair", "Faithful", "Famous", "Fancy", "Fantastic", "Fierce", "Filthy", "Fine", "Foolish", "Fragile", "Frail", "Frantic", "Friendly", "Frightened", "Funny", "Gentle", "Gifted", "Glamorous", "Gleaming", "Glorious", "Good", "Gorgeous", "Graceful", "Grieving", "Grotesque", "Grumpy", "Handsome", "Happy", "Healthy", "Helpful", "Helpless", "Hilarious", "Homeless", "Homely", "Horrible", "Hungry"]
const nouns = ["Accountant", "Actor", "Actress", "Adventurer", "Aeronaut", "Agent", "Agriculturist", "Airman", "Ambassador", "Anarchist", "Anatomist", "Angel", "Animal", "Animator", "Anthropologist", "Apothecary", "Apprentice", "Architect", "Archivist", "Artist", "Assassin", "Astronaut", "Astronomer", "Athlete", "Author", "Baker", "Banker", "Barber", "Bard", "Barista", "Barrister", "Bartender", "Beggar", "Biologist", "Blacksmith", "Boatswain", "Bodyguard", "Bookkeeper", "Botanist", "Bounty hunter", "Brewer", "Bricklayer", "Brigand", "Broker", "Builder", "Butcher", "Butler", "Cabinet maker", "Candlemaker", "Captain", "Carpenter", "Cartographer", "Cartwright", "Caterer", "Chandler", "Chaplain", "Charcoal burner", "Chemist", "Chimney sweep", "Chirurgeon", "Choreographer", "Clerk", "Cobbler", "Collar maker", "Comedian", "Commander", "Concierge", "Confectioner", "Conservator", "Cook", "Cooper", "Coppersmith", "Coroner", "Courier", "Cowherd", "Crier", "Curator", "Cutler", "Dancer", "Daredevil", "Diplomat", "Director", "Diver", "Doctor", "Dressmaker", "Druid", "Duchess", "Duke", "Dyer", "Ecologist", "Editor", "Educator", "Electrician", "Embalmer", "Engineer", "Engraver", "Entertainer", "Envoy", "Equestrian", "Escort", "Executioner", "Explorer", "Farmer", "Ferryman", "Fighter", "Firefighter", "Fisherman", "Fletcher"]

export function generateRandomUsername() {
    let options = [trendyAdjectives, nouns];

    // Randomly choose 2 or 3 categories to combine
    let selectedCategories = options.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 2) + 2);
    let usernameParts = [];
    selectedCategories.forEach(category => {
        let randomWord = category[Math.floor(Math.random() * category.length)];
        usernameParts.push(randomWord);
    });
    return usernameParts.join('');
}
