let input = prompt('Input a name of a star: ');
let name0 = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
let name1 = ['Ursa Mirror', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];

function checkName(input) {
    for (let i = 0; i < name0.length; i++) {
        if (input == name0[i]) return i;
    }
    return NaN;
}

if (name1[checkName(input)] == undefined) document.write('This star does not exist');
else document.write(name1[checkName(input)]);