import React from 'react';
import ReactDOM from 'react-dom';


class Index extends React.Component {

    state = {
        options: [
            "Tylko dwie rzeczy są nieskończone: wszechświat oraz ludzka głupota, choć nie jestem pewien co do tej pierwszej",
            "Nie kłóć się z idiotą, bo najpierw sprowadzi cię do swojego poziomu, a potem pokona doświadczeniem",
            "Szansa na pójście do sklepu po chleb i wyjście tylko z chlebem jest jak trzy miliardy do jednego",
            "Skąpcy nie są przyjemnymi partnerami do życia, ale za to wspaniale nadają się na przodków",
            "Wszyscy słyszeliśmy, że milion małp przy milionie klawiatur mogło wyprodukować Dzieła Zebrane Szekspira; ale dzięki Internetowi wiemy, że to nieprawda",
            "Cierpliwość jest czymś, za co podziwiamy kierowcę jadącego za nami, ale nie tego, który jedzie przed nami",
            "Jedyną tajemnicą życia jest to, dlaczego piloci kamikaze nosili hełmy",
            "Wiedza polega na tym, że mamy świadomość, iż pomidor to owoc. Mądrość polega na tym, że nie dodajemy go do sałatki owocowej",
            "Zawsze pożyczaj pieniądze od pesymistów. Nie będzie spodziewał się ich zwrotu",
            "Szaleństwo jest dziedziczne. Dostajesz na głowę z powodu swoich dzieci",
            "Makler zachęcał mnie do zakupu akcji, które potroją swoją wartość każdego roku. Powiedziałem mu: \"W moim wieku nie kupuję nawet zielonych bananów",
            "Chodzenie do kościoła nie czyni cię bardziej chrześcijaninem, niż stanie w garażu czyni cię samochodem",
            "Jeśli kradniesz od jednego autora, to plagiat. Jeśli kradniesz od wielu, to są badania",
            "Kiedy umrę, chcę odejść spokojnie, jak mój dziadek, we śnie. Nie chcę odchodzić krzycząc i wrzeszcząc, jak pasażerowie w jego samochodzie",
            "Zanim mężczyzna zda sobie sprawę, że jego ojciec miał rację, ma już syna, który uważa, że ​​się myli",
            "Poprosiłem Boga o rower, ale wiem, że Bóg nie działa w ten sposób. Ukradłem więc rower i poprosiłem o przebaczenie",
            "Najpierw lekarz przekazał mi dobrą wiadomość: cierpiałem na chorobę, która zostanie nazwana moim nazwiskiem",
            "Ludzie sądzący, że wiedzą wszystko, są bardzo irytujący dla tych z nas, którzy naprawdę wiedzą",
            "Promocja jest czymś, czego nie potrzebujesz, po cenie, której nie możesz się oprzeć",
            "Bank to miejsce, które pożyczy ci pieniądze, jeśli możesz udowodnić, że ich nie potrzebujesz",
                ],
        option: null,
        value: "",
    };

    handleShowOption = () => {
        const index = Math.floor(Math.random() * this.state.options.length);
        this.setState({
            option: this.state.options[index],
        })
    };


    handleWriteJoke = (e) => {
        this.setState({
            value: e.target.value,
        })
    };


    handleAddJoke = () => {
        if(this.state.value === "") {
            return alert("Wpisz coś");
        }
        const options = [...this.state.options];
        options.push(this.state.value);
        this.setState({
            options: options,
            value: "",
        })
    };


    render() {
        return (
            <div>
                <p></p>
                {this.state.option ? <h1>{this.state.option}</h1> : null }
                <button onClick={this.handleShowOption}>Generuj</button>
                <br/>
                <input type="text" value={this.state.value} onChange={this.handleWriteJoke}/>
                <button onClick={this.handleAddJoke}>Dodaj żart</button>
                <br/>
            </div>
        )
    }
}



document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Index/>,
        document.getElementById('app')
    );
});