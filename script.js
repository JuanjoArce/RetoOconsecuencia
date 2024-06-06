document.addEventListener('DOMContentLoaded', () => {
    const participants = [];
    const truths = [];
    const dares = [];

    const participantInput = document.getElementById('participant-input');
    const addParticipantButton = document.getElementById('add-participant');
    const participantsList = document.getElementById('participants-list');

    const truthInput = document.getElementById('truth-input');
    const addTruthButton = document.getElementById('add-truth');
    const truthList = document.getElementById('truth-list');

    const dareInput = document.getElementById('dare-input');
    const addDareButton = document.getElementById('add-dare');
    const dareList = document.getElementById('dare-list');

    const startGameButton = document.getElementById('start-game');
    const homeDiv = document.getElementById('home');
    const gameDiv = document.getElementById('game');

    const rollDiceButton = document.getElementById('roll-dice');
    const resultDiv = document.getElementById('result');
    const participantNameP = document.getElementById('participant-name');
    const truthOrDareP = document.getElementById('truth-or-dare');
    const revealButton = document.getElementById('reveal');
    const revealTextP = document.getElementById('reveal-text');

    const backToHomeButton = document.getElementById('back-to-home');
    const backToHomeAfterRevealButton = document.getElementById('back-to-home-after-reveal');

    addParticipantButton.addEventListener('click', () => {
        const name = participantInput.value.trim();
        if (name) {
            participants.push(name);
            const li = document.createElement('li');
            li.textContent = name;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Quitar';
            removeButton.addEventListener('click', () => {
                participants.splice(participants.indexOf(name), 1);
                participantsList.removeChild(li);
            });

            li.appendChild(removeButton);
            participantsList.appendChild(li);
            participantInput.value = '';
        }
    });

    addTruthButton.addEventListener('click', () => {
        const truth = truthInput.value.trim();
        if (truth) {
            truths.push(truth);
            const li = document.createElement('li');
            li.textContent = truth;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Quitar';
            removeButton.addEventListener('click', () => {
                truths.splice(truths.indexOf(truth), 1);
                truthList.removeChild(li);
            });

            li.appendChild(removeButton);
            truthList.appendChild(li);
            truthInput.value = '';
        }
    });

    addDareButton.addEventListener('click', () => {
        const dare = dareInput.value.trim();
        if (dare) {
            dares.push(dare);
            const li = document.createElement('li');
            li.textContent = dare;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Quitar';
            removeButton.addEventListener('click', () => {
                dares.splice(dares.indexOf(dare), 1);
                dareList.removeChild(li);
            });

            li.appendChild(removeButton);
            dareList.appendChild(li);
            dareInput.value = '';
        }
    });

    startGameButton.addEventListener('click', () => {
        if (participants.length && (truths.length || dares.length)) {
            homeDiv.style.display = 'none';
            gameDiv.style.display = 'block';
        } else {
            alert('Agrega al menos un participante y una pregunta de verdad o un desafío de consecuencia.');
        }
    });

    rollDiceButton.addEventListener('click', () => {
        const participant = participants[Math.floor(Math.random() * participants.length)];
        const isTruth = Math.random() < 0.5;
        const taskArray = isTruth ? truths : dares;
        const task = taskArray[Math.floor(Math.random() * taskArray.length)];

        participantNameP.textContent = `Participante: ${participant}`;
        truthOrDareP.textContent = isTruth ? 'Verdad' : 'Consecuencia';
        revealTextP.textContent = task;

        resultDiv.style.display = 'block';
        revealTextP.style.display = 'none';
        backToHomeAfterRevealButton.style.display = 'none';
    });

    revealButton.addEventListener('click', () => {
        revealTextP.style.display = 'block';
        backToHomeAfterRevealButton.style.display = 'inline';
    });

    backToHomeButton.addEventListener('click', () => {
        gameDiv.style.display = 'none';
        homeDiv.style.display = 'block';
        resultDiv.style.display = 'none';
        revealTextP.style.display = 'none';
    });

    backToHomeAfterRevealButton.addEventListener('click', () => {
        gameDiv.style.display = 'none';
        homeDiv.style.display = 'block';
        resultDiv.style.display = 'none';
        revealTextP.style.display = 'none';
    });
});
