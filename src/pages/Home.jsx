import Nav from "./Nav"

import './styles.css';

export default function Home(){
    return(
        <div>
            <Nav />
            <div id="home">
                <h1>Este formulário foi elaborado como parte de uma pesquisa acadêmica com o propósito de aprofundar o entendimento do perfil dos alunos. O objetivo principal é investigar se o aluno está envolvido em atividades de estudo, trabalho ou ambas, além de identificar as tecnologias que são objeto de estudo e sua experiência no campo da programação.</h1>
                <br /><br />
                <button class="button"><a href="/forms" class="textbutton">Start Survey</a></button>
            </div>
        </div>
    )
}