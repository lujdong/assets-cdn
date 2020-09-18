$(() => {
    $('#card-info-btn').click(() => {
        btf.snackbarShow('使用快捷键 ctrl+D 将本站加入到书签！')
    })

    // 滚动到评论处
    if (window.location.hash) {
        var checkExist = setInterval(function () {
            if ($(window.location.hash).length) {
                $('html, body').animate({ scrollTop: $(window.location.hash).offset().top - 90 }, 1000)
                clearInterval(checkExist)
            }
        }, 100)
    }
})
