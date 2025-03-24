class RemoteControl {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // método de instância:
    // a instância chama o
    // método (c1.volumeUp())

    volumeUp() {
        if (this.volume >= 100) {
            console.log('Maximum volume');
            return;
        }
        this.volume += 2;
    }

    volumeDown() {
        if (this.volume <= 0) {
            console.log('Minimum volume');
            return;
        }
        this.volume -= 2;
    }

    // método estático:
    // apenas consegue chamar o método
    // usando a classe:
    // RemoteControl.resetAllControls()
    static resetAllControls() {
        console.log('Controls reseted.');
    }
}

const c1 = new RemoteControl(1);
c1.volumeUp();
c1.volumeUp();
c1.volumeUp();

console.log(c1);

RemoteControl.resetAllControls();
