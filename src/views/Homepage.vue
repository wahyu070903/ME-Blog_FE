<template>
    <div class="w-full px-24 pt-10">
        <div class="flex flex-row justify-between">
            <div id="a" class="relative w-[720px] h-[460px] flex-shrink-0 rounded text-white">
                <div class="absolute top-0 left-0 w-full h-full shadow-inner-recent-post z-100 rounded"></div>
                <img class="w-full h-full object-cover rounded" src="../assets/images/astrobotic-photo.webp">
                <div class="absolute top-4 left-6 flex flex-row items-center">
                    <i class="bi bi-lightning-charge text-base"></i>
                    <p class="mx-1 text-sm">RECENT POST</p>
                </div>
                <div class="absolute bottom-9 left-8">
                    <div class="flex flex-row items-center my-3">
                        <i class="bi bi-clock-history text-base"></i>
                        <p class="mx-1.5 text-sm">5 MIN READ</p>
                    </div>
                    <p class="text-2xl">NASA Set Coverage for ULA , Astrobotic Artemis Robotic Moon Launch</p>
                </div>
            </div>
            <div id="b" class="w-full">
                <div class="flex flex-row items-center">
                    <p>Aug 10, 2024</p>
                    <div class="w-[2px] h-[16px] mx-1.5 bg-base-yellow"></div>
                    <p>TECH</p>
                </div>
                <p>NASA has recently announced a significant coverage agreement with United Launch Alliance (ULA) and Astrobotic for the upcoming Artemis robotic moon launch. This collaboration marks a key milestone in the Artemis program, which aims to return humans to the Moon and establish a sustainable presence. The partnership will ensure comprehensive media coverage of the mission, highlighting the critical role of ULA's launch capabilities and Astrobotic's advanced lunar robotics. This strategic alignment underscores NASA's commitment to transparency and public engagement, while also showcasing the innovative technologies driving humanity’s next great leap into space.</p>
                <button class="flex flex-row items-center">
                    <p>More Details</p>
                    <i class="bi bi-arrow-down-right-square-fill text-xl"></i>
                </button>
            </div>
        </div>
    </div>
</template>