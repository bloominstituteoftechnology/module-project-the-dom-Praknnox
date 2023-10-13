function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  let wicket=document.querySelectorAll('section>div')
  wicket.forEach(widget=>{
    widget.classList.add('widget')
  })

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  let randomizer=Math.floor(Math.random()*quotes.length)
  let quoteme=quotes[randomizer]
  let quote=document.createElement('div')
  let text=quoteme.quote
  quote.textContent=text
  let daysy=document.querySelector('.quoteoftheday')
  daysy.appendChild(quote)
  let who=document.createElement('div')
  let {author,date}=quoteme
  who.textContent=`${author} in ${date||'an unknown date'}`
  daysy.appendChild(who)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  let verb1=verbs[Math.floor(Math.random()*verbs.length)]
  let verb2=verbs[Math.floor(Math.random()*verbs.length)]
  let adverb1=adverbs[Math.floor(Math.random()*adverbs.length)]
  let adverb2=adverbs[Math.floor(Math.random()*adverbs.length)]
  let noun1=nouns[Math.floor(Math.random()*nouns.length)]
  let noun2=nouns[Math.floor(Math.random()*nouns.length)]
  let speak=`We need to ${verb1} our ${noun1} ${adverb1} in order to ${verb2} our ${noun2} ${adverb2}.`
  let parapara=document.createElement('p')
  parapara.textContent=speak
  document.querySelector('.corporatespeak').appendChild(parapara)
  
  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  let dragula=document.querySelector('.countdown')
  let count=5
  let alucard=document.createElement('p')
  alucard.textContent=`T-minus ${count}...`
  dragula.appendChild(alucard)
  let abf=setInterval(()=>{
    if(count===1){
      alucard.textContent='Liftoff! 🚀'
      clearInterval(abf)
    }else{
    count--
    alucard.textContent=`T-minus ${count}...`
    }
  },1000)

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  let pebble=people[Math.floor(Math.random()*people.length)]
  let power=document.createElement('p')
  document.querySelector('.friends').appendChild(power)
  let annes=pebble.dateOfBirth.split('-')[0]
  let info=`${pebble.fname} ${pebble.lname} was born in ${annes} and `
  //power.textContent=`${pebble.fname} ${pebble.lname} was born in ${annes} and is friends with ${}`

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
