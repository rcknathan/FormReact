import Nav from "./Nav"

export default function Home(){
    return(
        <div>
            <Nav />
            <div id="home">
                <h1>Este formulário foi criado como parte de uma pesquisa acadêmica para
        entender melhor o perfil dos alunos. Estamos interessados em saber se o
        aluno estuda, trabalha, ou estuda e trabalha, bem como quais
        tecnologias ele estuda e sua experiência com programação.</h1>
                <br /><br />
                <button><a href="/forms">Start Survey</a></button>
            </div>
        </div>
    )
}