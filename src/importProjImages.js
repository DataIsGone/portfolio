// ----- PAGE IMAGE ASSETS

// HABLO GATO
import HGNPCGen1 from '/src/assets/img/NPC_gen_1.gif';
import HGFollowTest from '/src/assets/img/follow_test.gif';
import HGFollowCurr from '/src/assets/img/follow_curr.gif';

// STARMETRY
import StarMovement25D from '/src/assets/img/movement.gif';
import StarRef from '/src/assets/img/ref_book.gif';
import StarMathGenWidth from '/src/assets/img/mathProblem_width.gif';
import StarMathGenWheel from '/src/assets/img/mathProblem_wheel.gif';
import StarShaderStar from '/src/assets/img/star_shader.gif';
import StarShaderStarGraph from '/src/assets/img/ss_base_shader.png';
import StarShaderRiver from '/src/assets/img/river_shader.gif';
import StarShaderRiverGraph from '/src/assets/img/ss_river_shader.png';

// CATIATOR
import CatTurnaround from '/src/assets/img/turnaround.png';
import CatBones from '/src/assets/img/bones.png';
import CatController from '/src/assets/img/nurbcurves.png';
import CatAnimWaddle from '/src/assets/img/waddle.gif';
import CatAnimAttack from '/src/assets/img/attackplayer.gif';
import CatAnimDefeated from '/src/assets/img/defeated.gif';

// GUIDING LIGHT
import GLGitGuides from '/src/assets/img/gitguides.png';
import GLUpdateMain from '/src/assets/img/updatemain.png';
import GLPullRequests from '/src/assets/img/prs.png';
import GLDog from '/src/assets/img/gl_pa_dog.png';
import GLPortraits from '/src/assets/img/gl_portraits.png';
import GLPAMenu from '/src/assets/img/gl_pa_menubg.png';
//// THUMBNAILS
import CGThumbDog from '/src/assets/img/gl_dogCG_thumb.png';
import CGThumbPortraits from '/src/assets/img/gl_portraits_thumb.png';
import CGThumbMenu from '/src/assets/img/gl_menuCG_thumb.png';


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