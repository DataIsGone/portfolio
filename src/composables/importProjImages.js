// ----- PAGE IMAGE ASSETS

// HABLO GATO
import HGNPCGen1 from '/src/assets/img/NPC_gen_1.webp';
import HGFollowTest from '/src/assets/img/follow_test.webp';
import HGFollowCurr from '/src/assets/img/follow_curr.webp';

// STARMETRY
import StarMovement25D from '/src/assets/img/movement.webp';
import StarRef from '/src/assets/img/ref_book.webp';
import StarMathGenWidth from '/src/assets/img/mathProblem_width.webp';
import StarMathGenWheel from '/src/assets/img/mathProblem_wheel.webp';
import StarShaderStar from '/src/assets/img/star_shader.webp';
import StarShaderStarGraph from '/src/assets/img/ss_base_shader.webp';
import StarShaderRiver from '/src/assets/img/river_shader.webp';
import StarShaderRiverGraph from '/src/assets/img/ss_river_shader.webp';

// CATIATOR
import CatTurnaround from '/src/assets/img/turnaround.webp';
import CatBones from '/src/assets/img/bones.webp';
import CatController from '/src/assets/img/nurbcurves.webp';
import CatAnimWaddle from '/src/assets/img/waddle.webp';
import CatAnimAttack from '/src/assets/img/attackplayer.webp';
import CatAnimDefeated from '/src/assets/img/defeated.webp';

// GUIDING LIGHT
import GLGitGuides from '/src/assets/img/gitguides.webp';
import GLUpdateMain from '/src/assets/img/updatemain.webp';
import GLPullRequests from '/src/assets/img/prs.webp';
import GLDog from '/src/assets/img/gl_pa_dog.webp';
import GLPortraits from '/src/assets/img/gl_portraits.webp';
import GLPAMenu from '/src/assets/img/gl_pa_menubg.webp';
//// THUMBNAILS
import CGThumbDog from '/src/assets/img/gl_dogCG_thumb.webp';
import CGThumbPortraits from '/src/assets/img/gl_portraits_thumb.webp';
import CGThumbMenu from '/src/assets/img/gl_menuCG_thumb.webp';


const projImg = [
    // HABLO GATO: [0][0-2]
    [
        HGNPCGen1,
        HGFollowTest,
        HGFollowCurr
    ],

    // STARMETRY: [1][0-7]
    [
        StarMovement25D,
        StarRef,
        StarMathGenWidth,
        StarMathGenWheel,
        StarShaderStar,
        StarShaderStarGraph,
        StarShaderRiver,
        StarShaderRiverGraph
    ],

    // CATIATOR: [2][0-5]
    [
        CatTurnaround,
        CatBones,
        CatController,
        CatAnimWaddle,
        CatAnimAttack,
        CatAnimDefeated
    ],

    // GUIDING LIGHT:
    //  Images: [3][0-5]
    //  Thumbnails: [3][6-8]
    [
        GLGitGuides,
        GLUpdateMain,
        GLPullRequests,
        GLDog,
        GLPortraits,
        GLPAMenu,
        // THUMBNAILS
        CGThumbMenu,
        CGThumbPortraits,
        CGThumbDog
    ]

    // MICROSOFT: (DOES NOT NEED)
];

export default projImg;