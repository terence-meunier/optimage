import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';

(async () => {
    await imagemin(['images/*.png'], {
        destination: 'out/images',
        plugins: [
            imageminPngquant({quality: [0, 0.05] })
        ]
    });

    console.log('Images optimized');
})();