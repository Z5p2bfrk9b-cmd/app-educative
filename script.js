// Aller à une étape
function allerEtape(numero) {
    document.querySelectorAll('.etape').forEach(function(etape) {
        etape.classList.add('cache')
    })
    document.getElementById('etape' + numero).classList.remove('cache')
}

// Afficher les classes selon le niveau
function afficherClasses() {
    let niveau = document.getElementById('niveau').value

    document.getElementById('classes_college').classList.add('cache')
    document.getElementById('classes_lycee_general').classList.add('cache')
    document.getElementById('classes_lycee_techno').classList.add('cache')
    document.getElementById('classes_lycee_pro').classList.add('cache')

    if (niveau === 'college') {
        document.getElementById('classes_college').classList.remove('cache')
    } else if (niveau === 'lycee_general') {
        document.getElementById('classes_lycee_general').classList.remove('cache')
    } else if (niveau === 'lycee_techno') {
        document.getElementById('classes_lycee_techno').classList.remove('cache')
    } else if (niveau === 'lycee_pro') {
        document.getElementById('classes_lycee_pro').classList.remove('cache')
    }
}

// Afficher étape 3 selon le niveau
function afficherEtape3() {
    let niveau = document.getElementById('niveau').value

    document.getElementById('specialites_general').classList.add('cache')
    document.getElementById('filieres_techno').classList.add('cache')
    document.getElementById('filieres_pro').classList.add('cache')

    if (niveau === 'lycee_general') {
        document.getElementById('specialites_general').classList.remove('cache')
        allerEtape(3)
    } else if (niveau === 'lycee_techno') {
        document.getElementById('filieres_techno').classList.remove('cache')
        allerEtape(3)
    } else if (niveau === 'lycee_pro') {
        document.getElementById('filieres_pro').classList.remove('cache')
        allerEtape(3)
    } else if (niveau === 'college') {
        afficherMatieres()
        allerEtape(4)
    }
}

// Afficher les bonnes matières
function afficherMatieres() {
    let niveau = document.getElementById('niveau').value

    document.getElementById('matieres_college').classList.add('cache')
    document.getElementById('matieres_general').classList.add('cache')
    document.getElementById('matieres_techno').classList.add('cache')
    document.getElementById('matieres_pro').classList.add('cache')

    if (niveau === 'college') {
        document.getElementById('matieres_college').classList.remove('cache')
    } else if (niveau === 'lycee_general') {
        document.getElementById('matieres_general').classList.remove('cache')
    } else if (niveau === 'lycee_techno') {
        document.getElementById('matieres_techno').classList.remove('cache')
    } else if (niveau === 'lycee_pro') {
        document.getElementById('matieres_pro').classList.remove('cache')
    }

    allerEtape(4)
}
