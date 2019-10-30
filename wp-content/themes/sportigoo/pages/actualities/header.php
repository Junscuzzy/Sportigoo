<?php


// Posts query
$my_posts = new WP_Query( array(
    'post_type' => 'post',
    'post_status' => 'publish',
    'posts_per_page' => 4,
    'orderby' => array('date' => 'DESC')
) );

// 1er Post
$post1 = $my_posts->posts[0];
$id = $post1->ID;
$excerpt = whl_get_the_excerpt( $id );
$link = get_permalink( $id );
?>


<section>
    <div class="last-posts">
        <div class="container actualites__last-posts">
            <div class="actualites__last-posts-wrapper">
                <div class="last-posts__preview">
                    <div class="last-posts__excerpt-wrapper t-center">
                        <p id="excerptPreview">
                            <?= $excerpt ?>
                        </p>
                        <a class="link" id="preview-link" href="<?= $link ?>">Lire la suite</a>
                    </div>
                </div>

                <?php if ( $my_posts->have_posts() ) { ?>
                    <div class="last-posts__nav">

                        <?php while ($my_posts->have_posts()) {
                            $my_posts->the_post();
                            $thumbnail_url = get_the_post_thumbnail_url( get_the_ID(), 'full' ); ?>

                            <div class="last-posts__nav-item-wrapper">

                                <span class="last-posts__nav-excerpt d-none">
                                    <?php the_excerpt() ?>
                                </span>

                                <a class="last-posts__nav-item" href="<?php the_permalink(); ?>">
                                    <h4><?php the_title(); ?></h4>
                                    <span class="link link__white">Découvrir</span>
                                </a>
                                <div class="last-posts__img"
                                     style="background-image:url('<?= $thumbnail_url ?>');">
                                </div>

                            </div>

                        <?php }
                        wp_reset_postdata(); ?>

                    </div>
                <?php } ?>
            </div>
        </div>
        <div class="last-posts__filter"></div>
    </div>
</section>