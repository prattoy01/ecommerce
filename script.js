<script>
    const bar = document.getElementById('bar');
    const clos = document.getElementById('clos');
    const nav = document.getElementById('navbar');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('act01');


        })
    }
    if (clos) {
        clos.addEventListener('click', () => {
            nav.classList.remove('act01');


        })
    }
</script>