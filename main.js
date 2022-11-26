function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
       return color;
    }

    function getRandomQuote() {

        const quote = [
            "The concept of hope is nothing more than giving up. A word that holds no true meaning - Madara Uchiha(Naruto)",
            "The longer you live… The more you realize that reality is just made of pain, suffering and emptiness - Madara Uchiha(Naruto)",
            "Thinking of peace whilst spilling blood is something that only humans could do - Madara Uchiha(Naruto)",
            "When a man learns to love, he must bear the risk of hatred - Madara Uchiha(Naruto)",
            "Balance is what keeps the world going - Madara Uchiha(Naruto)",
            "Humans are nothing but divided amongst the two sides of a coin. They would wanna fight for peace, but by physical war, and only that victory would bring them the final peace - Madara Uchiha(Naruto)",
            "Hope isn't something where keep on hanging onto something, but where we let things go and leave it up to the fate, and keep an optimistic approach towards life - Madara Uchiha(Naruto)",
            "The world is nothing but a game of balance. There's always going to be bad in order to balance out the good - Madara Uchiha(Naruto)",
            "In this world, wherever there is light , there are also shadows. As long as the concept of winners exists, there must also be losers - Madara Uchiha(Naruto)",
            "Love is an essential element, but not everyone gets it. It’s okay not to have love, but to survive in this world, you need to make yourself capable and achieve success - Madara Uchiha(Naruto)",
            "People cannot show each other their true feelings. Fear, suspicion, and resentment never subside - Madara Uchiha(Naruto)",
            "This world is filled with hatred, agony, and sufferings. All of these are the result of dishonesty and lies - Madara Uchiha(Naruto)",
            "World, when we enter into it, seems all new and exciting. But as we grow more and more and reach our final phase of living, all we realize is that life is all about nothingness and will end someday - Madara Uchiha(Naruto)",
            "Life will always throw new challenges at you just when you will feel like you’ve succeeded but you’ve gotta hold in there, tight, and get through with it - Madara Uchiha(Naruto)",
            "Things never go according to our comfort but run according to their schedule - Madara Uchiha(Naruto)",
            "An unstable force, lacking in intelligence or sapience, you require a guide to show you purpose - Madara Uchiha(Naruto)",
            "We need guidance to help us find a purpose in life. Without this, life will be just a journey without any real destination - Madara Uchiha(Naruto)",
            "We are born to this world as merely children without a clear path or the intellect to know right from wrong - Madara Uchiha(Naruto)",
            "You are merely a momentary life, a temporary existence of coalesced energy, energy that once was a single, ultimate form - Madara Uchiha(Naruto)",
            "Our life is short and temporary. We do not have much time in this world. But it is how we utilize and spend the time that is given to us that really matters - Madara Uchiha(Naruto)",
            "Be strong enough to be someone who even the demons would fear - Madara Uchiha(Naruto)",
            "Only those with the strength to stand against anything that comes their way, without flinching, can survive even the cruelest of ordeals - Madara Uchiha(Naruto)",
            "Only with strength and unyielding power can one stand up to even the mightiest of foes - Madara Uchiha(Naruto)",
            "No matter how powerful your opponent is, if you foresee their moves, you’ll be able to defeat them - Madara Uchiha(Naruto)"
            ,"If You Don't Want It, It Becomes You - Kakashi Hatake(Naruto)"
            ,"Every Day, I Eat, Sleep, & Worry About Stupid Things - Kakashi Hatake(Naruto)"
            ,"The Nail That Sticks Up Gets Hammered Down - Kakashi Hatake(Naruto)"
            ,"Those Without Many Abilities Tend To Complain More - Kakashi Hatake(Naruto)"
            ,"Those Who Don't Have The Decency To Respect The Memories Of Their Comrades Are The Worst - Kakashi Hatake(Naruto)"
            ,"Today, I Got Lost On The Road Of Life - Kakashi Hatake(Naruto)"
            ,"As For My Hobbies...I Have Lots Of Hobbies - Kakashi Hatake(Naruto)"
            ,"You're A Bunch Of Idiots - Kakashi Hatake(Naruto)"
            ,"You Think You Get It, But That's Not The Same As Actually Getting It - Kakashi Hatake(Naruto)"
            ,"It'll Be A Miracle! - Kakashi Hatake(Naruto)"
        ];
        
        for (var i = 0; i < quote.length; i++) {
        var result = getRandomItem(quote);
        }
       return result;
       
    }

    function setRandomQuote() {
    const str = getRandomQuote();
    const data = str.split(" - ");
    $("#quote").text(data[0]+".");
    $("#author").text(" - "+data[1]);
    $("#textArea").css("background-color", getRandomColor());
}

// program to get a random item from an array
function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}
