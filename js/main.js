const randomQuestion = {
  1: "What is one important skill that everyone should have?",
  2: "What is the best thing that happened to you this week?",
  3: "What is your favorite movie and why is it your favorite?",
  4: "What is one thing you think more people should be aware of?",
  5: "Would you commit murder if you knew you were going to get away with it?",
  6: "If you were a tree, what tree would you be?",
  7: "If you could be one celebrity or influential individual for one day, who would it be and why?",
  8: "What is your favorite movie from your childhood?",
  9: "Do you think all people should have equal rights?",
  10: "What do you think the purpose of government is in our modern society?",
  11: "If you were suddenly granted a billion dollars, what would you do with your hoard of wealth?",
  12: "Do you think housing and healthcare are human rights?",
  13: "When was the last time you spoke to your parents?",
  14:"What is your favorite conspiracy theory?",
  15: "What is your opinion of unions?",
  16: "Do you believe that Black lives matter?",
  17: "Have you ever donated to charity? If so what was the last charity you donated to?",
  18: "Are you a feminist?",
  19: "Are you religious or spiritual in any way?",
  20: "What is most important to you: family, work, or your faith?",
  21: "Have you ever had an encounter with something supernatural or otherworldly?",
  22: "What's one song you know completely by heart?",
  23: "Do you agree that Trans people are valid in how they choose to express their gender?",
  24: "In the last election you voted in, who did you vote for?",
  25: "What is your astrological sign?",
  26: "What is one of your favorite dishes to cook yourself?",
  27: "What is one fictional character that you relate to?",
  28: "What are three words you would use to describe your childhood?",
  29: "What is something you fear?",
  30: "If you could change one thing about yourself, what would it be?",
  }

function randomSelector {
  let question = Math.floor(Math.random() * 31);
  
  return randomQuestion[question]
}
