import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import React, { useRef } from "react";

import styles from './Home.module.css';

/* --IMAGENS--*/

import Mulher from "../../Assets/Mulher.png";
import Homem from "../../Assets/Homem.png";
import Premium from "../../Assets/Premium.png";
import Aspas from "../../Assets/Aspas.png";
import Grupo from "../../Assets/Grupo.png";
import Redes from "../../Assets/Redes.png";

function Home() {

    const sobre = useRef();
    function scrollTo(ref) {
        window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
    }

    return (
        <div className={styles.Home}>
            <Header />
            <div className={styles.Inicio} >
                <div className={styles.Text1}>
                    <div>
                        <h1>
                            <span className={styles.Blue}>
                                Aprimore a promoção dos seus produtos ou serviços usando o nosso
                                aplicativo
                            </span>
                            <span className={styles.Black}>!</span>
                        </h1>
                        <h4>
                            Com os nossos aplicativos, você pode divulgar seus produtos, serviços,
                            contratar ou comprar de maneira rápida e fácil.
                        </h4>
                    </div>
                </div>
                <div className={styles.Conheca}>
                    <h1>
                        <span className={styles.Blue}>
                            Conheça-nos e mergulhe em uma experiência única de qualidade
                        </span>
                        <span className={styles.Black}>.</span>
                    </h1>
                    <h4>
                        Para obter mais informações sobre nós e compreender nossa essência,
                        clique no botão abaixo e descubra quem somos e por que estamos
                        dedicados a esse tema.
                    </h4>
                    <button onClick={() => scrollTo(sobre)} className={styles.SaibaMais}>
                        Saiba mais
                    </button>
                </div>
            </div>

            <div className={styles.Apps}>
                <div className={styles.quadrado1} />
                <div className={styles.AppUser}>
                    <div className={styles.User}>
                        <h1>
                            Baixe o nosso aplicativo agora e tenha acesso a uma experiência
                            incrível!
                        </h1>
                        <h5>O My Service é uma plataforma que conecta clientes a profissionais qualificados, facilitando a contratação de serviços e o compartilhamento de experiências. Profissionais podem mostrar seus trabalhos e descobrir novas oportunidades, simplificando a conexão entre quem busca serviços e quem os oferece.
                        </h5>
                        <h4>Faça o download do nosso aplicativo</h4>
                        <button className={styles.CliqueAquiUser}>Clique aqui</button>
                    </div>
                    <div className={styles.Star1}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 128" fill="none">
                            <path d="M114.709 98.8994C114.695 98.8838 114.676 98.8722 114.662 98.8565L114.751 98.7733L90.3473 72.3687L125.578 64.3998L125.575 64.3817C126.487 64.147 127.272 63.5661 127.763 62.7622C128.255 61.9583 128.414 60.9946 128.206 60.0756C128.197 60.0331 128.177 59.9949 128.165 59.9518L128.188 59.9474L123.807 40.5756L123.793 40.5788C123.565 39.6828 123.002 38.908 122.221 38.4132C121.44 37.9184 120.499 37.7412 119.592 37.9178L119.588 37.9054L84.292 45.8954L95.0429 11.2817L95.0257 11.2764C95.2779 10.3698 95.1673 9.4006 94.7173 8.57415C94.2673 7.74771 93.5132 7.12891 92.6148 6.84885C92.5719 6.83551 92.5292 6.83355 92.4857 6.82193L92.4926 6.79959L73.5271 0.908978L73.5234 0.921003C72.6334 0.670605 71.6812 0.770333 70.8624 1.19972C70.0436 1.62911 69.4201 2.3556 69.12 3.23012L69.1096 3.22692L58.3769 37.7823L33.7754 11.1637L33.7598 11.1777C33.1013 10.5048 32.2063 10.1151 31.2651 10.0914C30.3238 10.0678 29.4105 10.4121 28.719 11.0511C28.6872 11.0808 28.6646 11.1171 28.6328 11.1468L28.6188 11.1311L14.0341 24.6123L14.0411 24.6201C12.6668 25.9639 12.5785 28.1403 13.8385 29.5902L13.8335 29.5943L13.8829 29.6473L13.9045 29.6748L13.9312 29.6981L38.4779 56.2563L3.97963 64.061C3.70144 64.0562 3.42363 64.0837 3.15177 64.1429C2.21838 64.3538 1.40642 64.9255 0.89331 65.7333C0.380199 66.541 0.207658 67.5189 0.413394 68.4535L0.399235 68.4566L4.93203 88.4972L4.99713 88.4816C5.32474 89.2683 5.91919 89.9144 6.67598 90.3062C7.43277 90.698 8.30346 90.8105 9.13497 90.6239C9.15707 90.6194 9.17562 90.6082 9.19772 90.6038L9.22281 90.7171L44.4109 82.7594L33.9567 116.418C33.8124 116.657 33.6964 116.913 33.6111 117.179C33.0199 119.082 34.0788 121.101 35.9722 121.706L35.9685 121.718L55.5902 127.812L55.61 127.749C56.4551 127.86 57.3123 127.669 58.0303 127.209C58.7484 126.75 59.2814 126.052 59.5353 125.238C59.5417 125.218 59.5424 125.197 59.5471 125.176L59.6605 125.211L70.3618 90.7575L94.2823 116.639C94.4187 116.879 94.5748 117.11 94.7692 117.321C95.4186 118.024 96.3192 118.441 97.2747 118.482C98.2303 118.523 99.1635 118.186 99.8711 117.542L99.8781 117.55L114.5 104.033L114.508 104.028L114.513 104.022L114.97 103.601L114.928 103.554C115.444 102.876 115.704 102.038 115.664 101.187C115.624 100.336 115.286 99.526 114.709 98.8994Z" fill="#F8F8F8" />
                        </svg>
                    </div>
                    <div className={styles.MulherImg}>
                        <img src={Mulher} />
                    </div>
                </div>
                <div className={styles.AppWork}>
                    <div className={styles.Work}>
                        <h1>
                            Baixe agora mesmo o aplicativo Work e aproveite todos os  seus benefícios!!
                        </h1>
                        <h5>O My Service Work é uma plataforma que fornece estatísticas essenciais, como faturamento e feedback dos clientes, para fornecedores. Essas informações permitem monitorar o desempenho, avaliar a satisfação dos clientes e tomar decisões estratégicas, sendo uma ferramenta eficaz para gerenciar e expandir atividades profissionais com eficiência.</h5>
                        <h4>Faça o download do nosso aplicativo</h4>
                        <button className={styles.CliqueAquiWork}>Clique aqui</button>
                    </div>
                    <div className={styles.Star2}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164 160" fill="none">
                            <path d="M128.208 142.662C128.198 142.637 128.18 142.615 128.17 142.591L128.312 142.529L110.108 100.663L155.676 105.854L155.679 105.831C156.871 105.931 158.056 105.563 158.981 104.805C159.906 104.047 160.5 102.958 160.636 101.77C160.642 101.715 160.634 101.661 160.639 101.605L160.667 101.609L163.523 76.553L163.504 76.5508C163.606 75.3813 163.256 74.2172 162.527 73.2972C161.798 72.3772 160.744 71.771 159.582 71.6029L159.583 71.5865L113.927 66.3936L141.301 29.399L141.282 29.3854C141.964 28.4042 142.237 27.1961 142.044 26.017C141.85 24.838 141.205 23.7806 140.245 23.0689C140.199 23.035 140.149 23.0148 140.102 22.9826L140.119 22.9588L119.849 7.9604L119.84 7.97325C118.878 7.30061 117.695 7.02171 116.533 7.19377C115.372 7.36583 114.321 7.97581 113.595 8.89855L113.584 8.8904L86.2566 45.8225L67.9049 3.61771L67.8803 3.62792C67.3725 2.54563 66.4628 1.70396 65.3443 1.28173C64.2259 0.859491 62.9869 0.889961 61.8906 1.36666C61.84 1.38892 61.7977 1.42299 61.7472 1.44525L61.737 1.42065L38.6115 11.4778L38.6167 11.4901C36.4069 12.5258 35.3903 15.0979 36.2939 17.3633L36.2861 17.3661L36.3232 17.4504L36.3377 17.4923L36.3598 17.5314L54.6712 59.6411L10.0497 54.5598C9.71823 54.4376 9.37369 54.3543 9.02302 54.3115C7.81586 54.1737 6.60322 54.5193 5.65011 55.2728C4.69699 56.0264 4.08088 57.1265 3.93641 58.3329L3.91813 58.3307L0.96507 84.2516L1.04964 84.2602C1.11312 85.3404 1.55535 86.3636 2.29861 87.15C3.04186 87.9364 4.03853 88.4356 5.11342 88.5599C5.14177 88.5638 5.16869 88.5581 5.19704 88.5621L5.17972 88.7084L50.6922 93.8949L24.0742 129.869C23.8011 130.095 23.5551 130.353 23.3414 130.636C21.8362 132.671 22.2608 135.533 24.2774 137.051L24.2679 137.064L45.2393 152.581L45.2895 152.513C46.2563 153 47.3638 153.13 48.4168 152.88C49.4698 152.63 50.4007 152.016 51.0457 151.147C51.062 151.125 51.0714 151.1 51.0859 151.077L51.207 151.167L78.454 114.343L96.298 155.379C96.361 155.724 96.4514 156.067 96.596 156.401C97.0807 157.515 97.9856 158.392 99.1138 158.841C100.242 159.291 101.502 159.276 102.62 158.801L102.625 158.813L125.81 148.729L125.821 148.726L125.83 148.721L126.554 148.407L126.523 148.334C127.425 147.737 128.088 146.841 128.396 145.804C128.705 144.767 128.638 143.655 128.208 142.662Z" fill="#4770D5" />
                        </svg>
                    </div>
                    <div className={styles.HomemImg}>
                        <img src={Homem} />
                    </div>
                </div>
            </div>

            <div className={styles.Premium}>
                <div className={styles.Aproveite}>
                    <h1>
                        Aproveite o acesso aos nossos planos premium e desfrute de
                        benefícios exclusivos.
                    </h1>
                    <h5>
                        Oferecemos três planos premium exclusivos para os fornecedores de
                        serviços: Bronze, Prata e Diamante. Cada plano tem características e
                        benefícios distintos. Veja abaixo os detalhes de cada um deles:
                    </h5>
                </div>
                <div className={styles.quadrado2} />
                <div className={styles.PremiumImg}>
                    <img src={Premium} />
                </div>
                <div className={styles.Pacotes}>
                    <div className={styles.Bronze}>
                        <img src={Aspas} />
                        <h1>
                            Plano Bronze: Por apenas 9,99/mês, você terá acesso a recursos
                            adicionais que vão impulsionar o seu perfil e ajudar a expandir
                            sua visibilidade na plataforma.
                        </h1>
                    </div>
                    <div className={styles.Prata}>
                        <img src={Aspas} />
                        <h1>
                            Plano Prata: Ao investir 24,99/mês no Plano Prata, você terá
                            acesso a benefícios ainda mais abrangentes, incluindo destaque em
                            buscas, avaliações aprimoradas e maior visibilidade para atrair
                            mais clientes.
                        </h1>
                    </div>
                    <div className={styles.Diamante}>
                        <img src={Aspas} />
                        <h1>
                            O Plano Diamante é um pacote premium que oferece vantagens extras,
                            como destaque nos resultados de busca, posicionamento privilegiado
                            e suporte prioritário, por um valor mensal de 79,99. É uma opção
                            completa para impulsionar seus negócios.
                        </h1>
                    </div>
                </div>
                <div className={styles.Escolha}>
                    <h3>
                        Escolha o plano premium que melhor se adequa às suas necessidades
                        e aproveite ao máximo todos os recursos e vantagens que ele
                        oferece para impulsionar o seu negócio.
                    </h3>
                </div>

            </div>

            <div className={styles.Saiba} ref={sobre}>
                <div className={styles.Sobre}>
                    <h1>
                        Descubra quem somos e quais são os nossos
                        <span className={styles.Blue}> objetivos. </span>
                    </h1>
                    <h4>
                        Somos um grupo de desenvolvedores
                        <span className={styles.Blue2}> juniores </span>
                        apaixonados por tecnologia.
                    </h4>
                    <h5>
                        Nossa missão é criar soluções inovadoras para ajudar as pessoas a
                        promoverem seus serviços e conectar-se. Desenvolvemos um
                        <span className={styles.Blue2}> aplicativo </span>e um
                        <span className={styles.Blue2}> site </span>
                        completos com recursos abrangentes, incluindo perfis
                        personalizados, pesquisa avançada e sistema de avaliações.
                    </h5>
                    <h3>
                        Nosso objetivo é oferecer excelência e ajudar os usuários a
                        expandirem seus negócios por meio de nossa plataforma.
                    </h3>

                </div>
                <div className={styles.Grupo}>
                    <img src={Grupo} />
                    <div className={styles.quadrado3} />
                    <div className={styles.fundo} />
                </div>
            </div>

            <div className={styles.Porque}>
                <div className={styles.quadrado4} />
                <div className={styles.OPorque}>
                    <h1>
                        Por que escolhemos esse tema<span className={styles.Blue2}>?</span>
                    </h1>
                    <h4>O My Service é uma inovadora plataforma que facilita a contratação de profissionais autônomos, oferecendo recursos como visualização de imagens e avaliações para uma escolha informada.</h4>
                    <h5>Os autônomos criam perfis detalhados, destacando habilidades e projetos anteriores, facilitando a conexão com clientes por meio de uma experiência completa e confiável.</h5>
                </div>
            </div>

            <div className={styles.Redes}>
                <img src={Redes} />
                <div className={styles.quadrado5} />
                <div className={styles.ExploreRede}>
                    <h1>
                        Explore nosso universo nas redes sociais e descubra tudo sobre nós
                        <span className={styles.Blue2}>.</span>
                    </h1>
                    <h2>
                        Venha nos conhecer de perto
                        <span className={styles.Blue2}>!!</span>
                    </h2>
                </div>
            </div>

            <div className={styles.Membros}>
                <div className={styles.Quem}>
                    <h1>
                        Quem Somos<span className={styles.Blue2}>?</span>
                    </h1>
                </div>
                <div className={styles.QuemSao}>
                    <div className={styles.Camily}>
                        <img src={Aspas} />
                        <h1>Camily Nasciemnto:</h1>
                        <h4>
                            A Camily foi a nossa coordenadora e líder durante o processo desse
                            projeto.
                            <span className={styles.Black}>
                                {" "}
                                Ela também contribuiu com a parte do back-end e auxiliou no
                                front-end.
                            </span>
                        </h4>
                    </div>
                    <div className={styles.Emerson}>
                        <img src={Aspas} />
                        <h1>Emerson Sales:</h1>
                        <h4>
                            O Emerson foi o nosso designer e foi responsável por toda a
                            prototipação dos nossos aplicativos e do nosso site.
                            <span className={styles.Black}>
                                {" "}
                                Além disso, ele também cuidou do front-end do site.
                            </span>
                        </h4>
                    </div>
                    <div className={styles.Joao}>
                        <img src={Aspas} />
                        <h1>João Pedro Martins:</h1>
                        <h4>
                            O João foi responsável pela parte do back-end e{" "}
                            <span className={styles.Black}>
                                também auxiliou com o front-end dos aplicativos.
                            </span>
                        </h4>
                    </div>
                    <div className={styles.Jose}>
                        <img src={Aspas} />
                        <h1>José Vinícius:</h1>
                        <h4>
                        José foi sublíder, atuou como front-end nos aplicativos 
                            <span className={styles.Black}>
                            e contribuiu para o desenvolvimento da API e do Banco de Dados em nossos projetos.
                            </span>
                        </h4>
                    </div>
                </div>
            </div>
<Footer/>
        </div >
    );
}

export default Home;