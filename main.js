const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry, I did not understand that.";

    if (message.includes('how are you')) {
      speech.text = "I am fine, thanks. How are you?";
    }

    if (message.includes('fine')) {
      speech.text = "Nice to hear that. How can I assist you today?";
    }

    if (message.includes('weather')) {
      speech.text = "Of course. Where are you currently?";
    }

    if (message.includes('London')) {
      speech.text = "It is 18 degrees and sunny.";
    }
    if (message.includes('Hello, what about you?')) {
      speech.text = "Hello, I am Zahid.";
    }
    if (message.includes('what is Napa')) {
      speech.text = "It is specially suitable for patients who, for any reason, can not tolerate aspirin or other analgesics. Napa suppositories are used for rapid symptomatic management of pain and fever.";
    }
    if (message.includes('where is Ahmed')) {
      speech.text = "It is 18 degrees and sunny.";
    }
    if (message.includes('what is Max Pro')) {
      speech.text = "Maxpro®Hp is indicated for the eradication of H. pylori in active chronic gastric,duodenal and gastric ulcers. CONTRAINDICATION: Maxpro®Hp is contraindicated in patients with known hypersensitivity to any of its compo- nent.";
    }
    if (message.includes('what is seclo')) {
      speech.text = "Seclo® capsule and tablet is indicated for gastroesophageal reflux disease including reflux esophagitis, acid reflux disease, duodenal and benign gastric ulcers, Helicobacter pylori eradication regimens in peptic ulcer disease, prophylaxis of acid aspiration, Zollinger-Ellison Syndrome (ZES) and for the treatment of NSAID-associated gastric ulcers, duodenal ulcers or gastroduodenal erosions.";
    }
    if (message.includes('Jahid  || zahid ')) {
      speech.text = "Jahid is a student of computer science  and engineering in sylhet metro politan university.";
    }
    if (message.includes('what is sergel')) {
      speech.text = "Of course. Where are you currently?";
    }
    if (message.includes('why need medicine')) {
      speech.text = "Of course. Where are you currently?";
    }
    if (message.includes('where is metro politan university')) {
      speech.text = "Pirer bazar, Sylhet - Tamabil Hwy, Bateshwar,Sylhet";
    }
    if (message.includes('where is mount adora hjospital')) {
      speech.text = "Mount Adora Hospital one Mirboxtula,sylhet and Another Mount Adora Hospital, Akhalia, Sylhet Address: Sylhet-Sunamganj Highway, Akhalia, Sylhet Contact: +8801707079717";
    }
    if (message.includes('where in osmani medical hospital')) {
      speech.text = "Of course. Where are you currently?";
    }
    if (message.includes('where is ibne sina hospital')) {
      speech.text = "Ibn Sina Hospital Sylhet Limited Subhanighat Point Sylhet, Bangladesh Hot Line: +880 9636-300300 PABX: 821 727933-42 Mobile: +880 1711405834 Email: info@ibnsinahospitalsylhet.com";
    }
    if (message.includes('where is popular')) {
      speech.text = "New Medical Road, Kajal Shah, Sylhet Sadar, Sylhet";
    }
 

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log('Voice activated');
};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener('click', () =>{
  recorder.start();
});
