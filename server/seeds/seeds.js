const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const db = require("../config/connection");
const Client = require("../models/Client");
const Message = require("../models/Message");
const User = require("../models/User");
const margePhone = process.env.MARGE_PHONE;
const willPhone = process.env.WILL_PHONE;

db.once("open", async () => {
  console.log("seeding database...");
  try {
    await Client.deleteMany({});
    await Message.deleteMany({});
    await User.deleteMany({});
    await Message.insertMany([
      {
        messageText: `Good Morning *! Today begins your journey to better health!

π₯ Day 1 Tips Video:
https://tinyurl.com/mtdkksej
      
π Send here, a picture of your toes on the scale (be mindful of your reflections on the scale!π³) OR send a screenshot from your scale's app! Weigh first thing in the morning, at approx the same time, in the same clothes or with no clothes.
      
π If you don't see it in the OPTAVIA Guide, donβt eat it!
      
π Send here, a photo of your L&G over the first week to help with any minor tweaking that we may need to do. Itβs VERY important to weigh your lean and green meal!
      
π For Accountability...
Time to close the door behind us so we only move FORWARD! Go on Facebook and/or Instagram, make this post, and tag me.
      
βDay 1 of changing my habits. I canβt wait to reach my goal!β`,
        messageDay: 1,
      },
      {
        messageText: `Day 2!

Your body is adjusting to this new way of fueling and possibly even detoxing. This will pass over the next few days. Your initial goal is to reach βfat burn!β
      
π Tips for today if you feel tired or hungry:
      -Drink 1-2 glasses of water and have an optional snack, like a dill pickle spear or celery stalks (check pg 21 of your guide for options)
      -Many clients drink a calorie-free electrolyte beverage (Powerade Zero or Ultima, Maximum 1/day!) Within a few days, these symptoms will disappear, leaving you feeling energized, so power through!
      
π Key Reminders
      -Send over your weigh-in from this morning and again tomorrow.
      -Take a pic of your L&G and send it to me. (This is usually the #1 miss for clients starting out.)`,
        messageDay: 2,
      },
      {
        messageText: `Hello Day 3!

π₯ Fat burn is just around the corner! The key is keeping it SIMPLE!
Remember, itβs very important to weigh your lean and green meal. This will help you learn the visual cues of what your foodβs COOKED weight looks like. This practice will teach you HOW to assess portions when dining out or traveling! βEyeballing" portions, especially in the beginning, wonβt work and will not get you the results you want!

π₯ Day 3 TOP tips video: //tinyurl.com/VirtualSupportVideo3

π₯ Set this as a recurring Zoom on your calendar!

Tips & Community Zoom:
Sundays 7pm CT / 8pm ET
Meeting ID#: 2147894205

Or click π to join!
https://zoom.us/j/2147894205

These are hosted by our amazing OPTAVIA Coaches, who will share key tips to help you be successful! Who better to learn from than someone who has walked a similar path! You won't want to miss it!

π Key Reminders:
      -Send over your weigh-in from this morning. This is the last weigh in until day 8!!
      -Take a pic of your L&G and send it to me. (This is usually the #1 miss for clients starting out.)`,
        messageDay: 3,
      },
      {
        messageText: `Day 4!

π₯ Here's your short Day 4 tips video:
https://tinyurl.com/3zspwcvj

β­οΈ Did you know that there is an additional "Condiment Guide" with a lot more that what's in your Opatvia guide? And....check out the "Dining Out Guide" to find program approved menu items for MANY restaurants??
Click here to get a copy:
https://answers.optavia.com/help

Looking forward to our call tomorrow to celebrate your wins and share what to expect for the rest of week 1.`,
        messageDay: 4,
      },
      {
        messageText: `Good morning * and welcome to Day 5!!

You should be hitting fat burn π₯ and feeling AMAZING! As you continue on program, you will experience:
More energy
Improved sleep
Reduced hunger & cravings
Weight Loss & Non Scale Victories (NSVs)!
      
π₯ This would be a GREAT day to share an update about your journey on Facebook and/or Instagram! Post a selfie with this and tag us:
      
"On day 5 and already feeling much better. I am so glad I did this!"
      
Your results will be AMAZING, and people are going to want to know what you're doing! Being on this journey with friends and family has been incredibly FUN & rewarding! Sharing this gift and bringing those we care about alongside us, helps to secure our health and enhances accountability.
      
π Today will be our last daily 5 min check-in call, until Day 8. What time is good for us to chat so we can share what to expect for the rest of the week?
      `,
        messageDay: 5,
      },
      { messageText: `Day 6 already? Can you believe your 1st week is almost over?!

BTW, careful doing Google searches as there is A LOT of rogue stuff on the Internet that can kick you out of βfat burnβ. This is why we recommend getting Optavia program approved recipes ONLY from only these 3 sources:

π Check out the Optavia App! OPTAVIA

You can modify your order or find an amazing assortment of βplan approvedβ Lean and Greens, all organized by the protein or veggie type you are looking to use. Simply use your email that you gave me to set up your account and the password is Welcome1! (capital W and ! on the end)

π Optavia Pinterest page:
https://www.pinterest.com/optavia/_created/

π FB Group (Clients only) βChoosing Health For Lifeβ
https://www.facebook.com/groups/394310908189709/media/albums`, messageDay: 6 },
      {
        messageText: `Good Morning! One more day to complete week 1!!
        
π Tomorrow morning, weigh in, and be sure to take your official one week progress photos, including a close up of your face! The side-by-side comparison is exciting and often surprising! Continue this each week to track your transformation!
      
π₯ TIP: Set a recurring appointment on your phone/calendar to weigh in and send over to me every βDay 8β.
      
β­οΈ Can\βt wait to celebrate your first week! Over the next month, we will continue to connect weekly. We will set those up tomorrow when we chat!`,
        messageDay: 7,
      },
      {
        messageText: `Congratulations *!! It's Day 8 and you made it, just as I knew you would!

π₯ Day 8 Tips Video:
https://tinyurl.com/tv7p7h4s

Make your first progress post in Choosing Health for Life (CH4L) today! Time to give back and inspire someone new, just as you were inspired by someone elseβs post.

Feel free to post your lean and green, favorite tip, or something like...

βA whole week down in my weight loss journey and Iβve already lost __ pounds! I used to be [ex. run-down, tired, unhappy in my appearance, bloated] and now Iβm filled with [ex. Hope! Energy! Confidence!] Iβm grateful to my coach [tag me] for sharing this program and for their support this week!β

π₯ IMPORTANT π₯
This morningβ¦
β­οΈ Send a few options that are good for you to hop on a quick (10min) call today or tomorrow to share what's you WILL NEED TO KNOW for week 2!
β­οΈ Send over your weigh-in from this morning & starting weigh in
β­οΈ Share any NSVs (Non Scale Victories) !!`,
        messageDay: 8,
      },
      {
        messageText: `Good morning *! Welcome to DAY 9 and going strong!!

Now that youβve got a week in the books and are rocking this program, itβs time to really start focusing on those healthy habits! Make sure youβve completed Element 1 and 2 if you havenβt already!

Choose to listen or watch the content in the format that you prefer!

π² Digital HABITS OF HEALTH
(THIS is the CORE of the program NOT the fuelings. So save this to your phone/computer!!!)
https://msha.ke/hohsystem

π§ Podcasts here:
OPTAVIAΒ? Habits of HealthΒ? Community Time Podcast on Apple Podcasts
https://tinyurl.com/yc5pxjvy

π YouTube here:
https://tinyurl.com/yatxhycf

π Weekly Goal:
A SIMPLE small goal is to listen/watch 1-2 elements from the HOH podcasts/YouTube a week!

π HOWβ¦.
MAXIMIZE YOUR TIME! Listen in the car on your way to work, getting dressed or when you go for a walk! Now you are FEEDING your mind with healthy tools to EMPOWER you to handle lifeβs challenges!

Understanding WHAT your body needs and WHY, is a huge part of success while on program and after you meet your goal! Sleep, water, protein, food groups, mindset, all of these will create a compounding effect for LIFELONG transformation!

Remember the goal is to have and live a long term Healthy Lifestyle NOT just temporary weight loss! π`,
        messageDay: 9,
      },
      {
        messageText: `Congratulations on reaching Day 10 *! You are doing THIS!

π₯ VERY IMPORTANT π₯

To make things simple for you starting out, and to make sure you received the right fuelings and freebies, I placed your 1st order for you. Now is the perfect time for you to log in to your account and learn how to edit your next order ("Premier")!

Here are some key TIPS and a short video walking you through how to do this! (KEY: watch this on your phone, while updating your order on your PC.)
π How to Edit your Premier Order: https://tinyurl.com/4jwfww8v

You will need to be logged into your client account via this site http://www.optavia.com, to view your Premier order from your βAccount Dashboard'.

Your username is your EMAIL and your temporary password is "Welcome1!" (the "W" is capitalized and be sure to use the ! at the end).

For a full 30 day supply, be sure your new order has about 20 boxes. Choose fuelings that say either "Optavia Essential" or "Optavia Select.β

Be sure to scroll down and SAVE your order.

Pro Tip: Adjust your next order process date, to avoid high volume processing times. Aim for processing before the 20th of the month, so you donβt run out of your favorite fuelings! Simply click on the βNext Order Dateβ to make any changes and ensure your order ships as soon as possible.

Or if easier for you, call our Client Success Team and they can help you at 1-888-OPTAVIA.

β­οΈ I am so proud of you *! Let me know if you have any questions!`,
        messageDay: 10,
      },
      {
        messageText: `Woohoo! Day 11!

PRO TIP: This program isnβt about the mechanics, itβs about developing Healthy Habits! Which are the key to sustaining a healthy lifestyle without thinking about it; breaking free of the "on/off dieting" mindset!

Time to dive into Element 3- βHow To Create What You Want?β! This is where the rubber meets the road! Pick 1οΈβ£

π READ: Lifebook, Element 3

π WATCH:
Your Live LifeBook Workshop - Element 3 - How Do You Create What You Want?
https://tinyurl.com/27wu9bhf

π§ LISTEN:
OPTAVIAΒ? Habits of HealthΒ? Community Time Podcast: How Do You Create What We Want?- Your LifeBook- Element 03 on Apple Podcasts
https://tinyurl.com/bdeb7cv5

Each week you can expect a quick check-in call from me to see how you are doing on your journey, to share what is next, answer any questions, or offer tips/suggestions for special events that may be coming up.

I coach because I wanted to pay this gift forward. Hearing from my clients not only helps THEM be successful, but it keeps me accountable in my own health journey as well!

β­οΈ Super proud of you *! You are doing great and....it only gets better from here!!`,
        messageDay: 11,
      },
      {
        messageText: `Day 12 is here!!!
        
As you get closer to the 2-week milestone, something my Coach did for me that was a turning point in my journey was she encouraged me to make a simple post on my personal FB page. (TRUST ME, I know! π³ I thought the same thing!) So now I want to encourage YOU to do this too for multiple reasons, a couple of which are added accountability to your health journey, as well as itβs always more fun to get healthy with a friend!!
      
π₯ Plus- Iβll give you $25 for posting to your personal social media page as a thank you! Who doesnβt like to save money, right?!
      
You can say something like -
βI'm 2 weeks into my health journey and I used to be [ex. run down, bloated, tired, uncomfortable in my clothes] and now Iβm filled with [ex. Hope! Energy! Confidence! Wearing a belt! Drinking More Water!] Not to mention Iβve already lost __ pounds and __ inches! Iβm so thankful for this program and for my coach <insert my name & tag me>!β
      
Make sure to add a picture for greater impact! If you want to do a side by side, send it over and Iβll help you put it together. Hereβs an example of a post 2 weeks in, click it to see!
https://www.facebook.com/deanna.asencio/posts/10210043108823144
      
Tag me when you celebrate and mention βhealth programβ without saying "Optavia"!! That will have more people asking what you did!!
      
I'm so glad my coach shared her story, so I could share this program with you! I know you will have so many friends, who will be glad you shared it too!`,
        messageDay: 12,
      },
      {
        messageText: `Happy Day 13!!!

You're almost at your two-week mark and I'm so excited for you!
Spend some time today considering the NSVs you have noticed since you began your journey! Watching the scale drop is great, but it's important to look for the other ways your life is changing as a result of your hard work.

Are your pants getting looser? Did you choose healthy food options at a family event? Do you have more energy to make it through your day??

π Think of 3 NSVs you have noticed in the last couple of weeks and send them to me! I LOVE hearing about the ways you are creating a better life for yourself!

π₯ Donβt forget: set this as a recurring Zoom on your calendar!
Tips & Community Zoom:
Sundays 7pm CT / 8pm ET
Meeting ID# 2147894205

Or click π to join!
https://zoom.us/j/2147894205

These are hosted by our amazing OPTAVIA Coaches, who will share key tips to help you be successful! Who better to learn from than someone who has walked a similar path! You won't want to miss it!`,
        messageDay: 13,
      },
      {
        messageText: `Day 14 *!!! Tomorrow is your 2-week mark and you are ROCKING IT!!!

By now, you should be in a great groove, have found some favorite fuelings and L&G meals. You are seeing the benefits of your hard work and dedication! Get ready to inspire your friends and family, because you are AMAZING!
      
Don't forget to take your 2-week pictures either tonight or tomorrow morning and send them over to me so I can put a side-by-side together for you. It's so exciting to see what a difference just two weeks of putting your health first can look like! Your two-week mark is also a great time to check out your measurements and see how many INCHES youβve lost!
      
β­οΈ Can't wait to celebrate you tomorrow and hear your official progress!`,
        messageDay: 14,
      },
    ]);

    await Client.insertMany([
      {
        username: "davepsandy",
        firstName: "Dave",
        lastName: "Sanders",
        email: "davepaulsanders@gmail.com",
        phoneNumber: "6095294847",
        weightLossGoals: "15 pounds",
        startDate: "10/19/2022",
      },
      {
        username: "margenice",
        firstName: "Margaret",
        lastName: "Nice",
        email: "margeenice@gmail.com",
        phoneNumber: margePhone,
        weightLossGoals: "0 pounds",
        daysElapsed: 4,
        startDate: "10/19/2022",
      },
      // {
      //   username: "willTynch",
      //   firstName: "Will",
      //   lastName: "Tynch",
      //   email: "will@gmail.com",
      //   phoneNumber: willPhone,
      //   weightLossGoals: "0 pounds",
      //   daysElapsed: 9,
      //   startDate: "11/30/2022",
      // },
    ]);
    await User.create({
      username: "bonnie",
      password: "123456",
    });
    console.log("Clients and messages created!");
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
});
