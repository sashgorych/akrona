$(document).ready(function () {
 //init videos and audio if need

        if (document.querySelector('.video-youtube')) {
            findVideos();

        }
        if(document.querySelector(".audio-player")){
            initMusicPlayer()
        }

})
    //lazy load video from youtube start

    function findVideos() {
        let videos = document.querySelectorAll('.video-youtube');

        for (let i = 0; i < videos.length; i++) {
            initVideo(videos[i])

            setupVideo(videos[i]);
        }
    }

    function setupVideo(video) {
        let link = video.querySelector('.video__link');
        let media = video.querySelector('.video__media');
        let button = video.querySelector('.video__button');
        let id = parseMediaURL(media);

        video.addEventListener('click', () => {
            if(!video.classList.contains('added-frame')) {
                let iframe = createIframe(id);

                link.remove();
                button.remove();
                video.classList.add('added-frame')
                video.prepend(iframe);
                link.removeAttribute('href');
                video.classList.add('video--enabled');
            }
        });


    }

    function parseMediaURL(media) {
        let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
        let url = media.src;
        let match = url.match(regexp);

        return match[1];
    }

    function createIframe(id) {

        let iframe = document.createElement('iframe');
        iframe.setAttribute('allowfullscreen', '1');
        iframe.setAttribute('allow', 'autoplay; encrypted-media');
        iframe.setAttribute('allowtransparency', '');
        iframe.setAttribute('src', generateURL(id));
        iframe.classList.add('video__media');
        return iframe;
    }

    function generateURL(id) {
        let query = '?rel=0&showinfo=0&autoplay=1';

        return 'https://www.youtube.com/embed/' + id + query;
    }

    function initVideo(videoTag) {
        let link = videoTag.querySelector('.video__link').href;
        let video_id = link.split('v=')[1];
        let ampersandPosition = video_id.indexOf('&');
        if (ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }
        let img_source = videoTag.querySelector('source');
        let img_source_src = "https://i.ytimg.com/vi_webp/" + video_id + "/maxresdefault.webp"
        img_source.setAttribute('srcset', img_source_src)
        let img_prev = videoTag.querySelector('.video__media');
        img_prev.setAttribute('loading', 'lazy')
        img_prev.setAttribute('width', '100%')
        img_prev.setAttribute('height', '100%')

        let img_prev_src = "https://i.ytimg.com/vi/" + video_id + "/maxresdefault.jpg"
        img_prev.setAttribute('src', img_prev_src)
    }

    //load video from youtube end

    //music player start
    function initMusicPlayer() {
        const audioPlayer = document.querySelector(".audio-player");
        let link = document.querySelector('.audio_list audio source')
        const audio = new Audio(link.src);
        //credit for song: Adrian kreativaweb@gmail.com

        audio.addEventListener(
            "loadeddata",
            () => {
                audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
                    audio.duration
                );
                audio.volume = .75;
            },
            false
        );

        //click on timeline to skip around
        const timeline = audioPlayer.querySelector(".timeline");
        timeline.addEventListener("click", e => {
            const timelineWidth = window.getComputedStyle(timeline).width;
            const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
            audio.currentTime = timeToSeek;
        }, false);

        //click volume slider to change volume

        //check audio percentage and update time accordingly
        setInterval(() => {
            const progressBar = audioPlayer.querySelector(".progress");
            progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
            audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
                audio.currentTime
            );
        }, 500);

        //toggle between playing and pausing on button click
        const playBtn = audioPlayer.querySelector(".controls .toggle-play");
        playBtn.addEventListener(
            "click",
            () => {
                if (audio.paused) {
                    playBtn.classList.remove("play");
                    playBtn.classList.add("pause");
                    audio.play();
                } else {
                    playBtn.classList.remove("pause");
                    playBtn.classList.add("play");
                    audio.pause();
                }
            },
            false
        );
    }



    //turn 128 seconds into 2:08
    function getTimeCodeFromNum(num) {
        let seconds = parseInt(num);
        let minutes = parseInt(seconds / 60);
        seconds -= minutes * 60;
        const hours = parseInt(minutes / 60);
        minutes -= hours * 60;

        if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
        return `${String(hours).padStart(2, 0)}:${minutes}:${String(
            seconds % 60
        ).padStart(2, 0)}`;
    }
    //music player end
