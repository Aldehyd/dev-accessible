
export default function VideoPlayer(): React.JSX.Element {
    return(
        <div class="video-container">
            <h2 class="video-title">Titre de la vidéo</h2>
            <div class="video-player">
                <div class="video-player_transcription">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe illum esse magnam omnis, iusto autem. Molestias nulla consectetur repellat aperiam dignissimos totam libero repudiandae dolores eos optio tempore, ut minima?
                    Iusto aperiam magnam modi recusandae, ullam dolorem eos harum at repellendus fugit reiciendis porro. Deserunt aspernatur doloribus rem vel ab. Voluptatem ipsum quae sit ad dolorum dolor, iste ipsa velit.
                    Facilis omnis velit minima, doloremque, fugiat beatae corrupti repellat odit itaque delectus, qui tempora doloribus totam molestiae dolores pariatur. Libero consequatur perferendis id reiciendis deleniti voluptatibus nihil delectus eaque et.
                    Quia voluptas omnis est veritatis minima consequuntur quas, totam culpa, nesciunt ullam fuga doloribus maxime incidunt excepturi officia deleniti cumque doloremque accusamus! Aspernatur sequi itaque distinctio ipsa dolorum, unde error!
                    Enim aperiam hic explicabo voluptatem facere officia sint quibusdam minus consequuntur vitae? Nesciunt, numquam? Eveniet deleniti exercitationem expedita id, libero tempore! Provident a fugit harum. Incidunt quae sit vitae voluptate?
                    Quam voluptas omnis, aliquam inventore eius ut sapiente. Reprehenderit eligendi unde alias quas recusandae! Minus, soluta sunt rem quibusdam ipsa commodi cumque laboriosam optio nam! Quidem ex explicabo incidunt sunt!
                    Enim, deserunt libero? Fugit optio vero architecto enim alias iure, magnam quam officiis nulla quibusdam blanditiis iusto sit assumenda numquam perspiciatis molestias quidem aliquam, accusamus eveniet, doloribus nemo sunt exercitationem.
                    Quis quod accusamus unde velit nisi exercitationem, sequi dignissimos et. Officiis odio error natus porro, officia, distinctio sint consectetur beatae nemo esse asperiores possimus totam, blanditiis reprehenderit commodi ipsam voluptatem.
                    Labore quas dolore minus quam nesciunt quisquam, ut ea esse quidem sint ex? Ipsa, explicabo, labore vitae quas totam voluptatum non numquam impedit praesentium sapiente laboriosam pariatur? Consectetur, distinctio. Quam.
                    Saepe est sunt dolor a nihil corrupti eius necessitatibus iusto temporibus obcaecati magnam laboriosam vel et, non ipsam dolores eveniet natus? Accusamus libero tempora quidem obcaecati ab excepturi eveniet ullam?</p>
                </div>
                <div class="video-player_video"></div>
                <button class="main-play-button">
                    <span class="main-play-button_play-icon">&#9654</span>
                </button>
                <div class="video-player_control-bar">
                    <div class="video-player_control-bar_timeline">
                        <button class="play-button video-player-button">
                            <span class="play-button_play-icon">&#9654</span>
                        </button>
                        <div class="time-slider">
                            <span class="time-slider_thumb"></span>
                        </div>
                    </div>
                    <div class="time-count">0:00 / 02:49</div>
                    <div class="video-player_control-bar_volume">
                        <button class="volume-button video-player-button">
                            <span class="volume-button_icon">&#128361;</span>
                        </button>
                        <div class="volume-slider-container">
                            <div class="volume-slider">
                                <div class="volume-slider_mask">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div class="volume-slider_thumb"></div>
                            </div>
                        </div>
                    </div>
                    <button class="full-screen-button video-player-button">&#9167;</button>
                </div>
            </div>
            <div class="button-container">
                <div class="button-shadow"></div>
                <button class="video-transcription-button">
                    <span class="video-transcription-button_transcription-text">Transcription textuelle</span>
                    <span class="video-transcription-button_video-text">Vidéo</span>
                </button>
            </div>
        
        </div>
    )
}