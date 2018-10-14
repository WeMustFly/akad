$(function () {
    const $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        layoutMode: 'masonry',
        masonry: {
            columnWidth: '.grid-sizer',
            gutter: 16
        }
    });

    $('[data-filter]').on('click', function () {
        const $this = $(this);
        const filter = $this.data('filter');

        if (filter === '*') {
            $grid.isotope({filter: filter});
        } else {
            $grid.isotope({filter: '[data-category='+filter+']'});
        }

        $this.addClass('active');
        $this.siblings().removeClass('active');
    });
});