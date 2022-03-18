// 返回顶部按钮
(
    function() {
        var backtotop = document.getElementById('backtotop');

        // 定义定时器
        var timer;
        backtotop.addEventListener('click', function() {
            // 清空定时器
            clearInterval(timer)
            timer = setInterval(() => {
                // 缓慢上升
                document.documentElement.scrollTop -= 100;
                if (document.documentElement.scrollTop <= 9) {
                    clearTimeout(timer)
                }
            }, 20);
        })


        // 监听页面滚动
        window.onscroll = function() {
            // 滚动值
            var scrollTop = document.documentElement.scrollTop || window.scrollY;
            // 当页面在顶部，那么返回顶部按钮就隐藏掉
            if (scrollTop == 0) {
                backtotop.style.display = 'none';
            } else {
                backtotop.style.display = 'block';
            }
        }
    })()