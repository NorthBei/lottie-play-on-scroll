import lottie, { AnimationItem } from "lottie-web";

type Params = {
  container: HTMLElement;
} & Parameters<typeof lottie.loadAnimation>;

type Config = {
  speed: number;
  pcEventRate: number;
  mobileEventRate: number;
};

const defaultConfig: Config = {
  speed: 50, // backward/forward 50 milliseconds every animation play
  pcEventRate: 1, // every 1 event will play 50 milliseconds animation
  mobileEventRate: 3, // every 4 event will play 50 milliseconds animation
};

export function loadLottie(params: Params, config?: Config) {
  const animation: AnimationItem = lottie.loadAnimation(params);
  animation.addEventListener("data_ready", () => {
    attachScroll(animation, params.container, config);
  });
  return animation;
}

export function attachScroll(
  animation: AnimationItem,
  element: HTMLElement,
  config = defaultConfig
) {
  let duration = 0;
  let mobileStartY = 0;
  const eventCounter = {
    pc: 0,
    mobile: 0,
  };
  // if frameRate is 60, it means 60 frames per second
  // if totalFrames is 120, 120/60 = 2, it means this animation duration is 2 seconds
  // 1000 millisecond per second
  const totalDuration = (animation.totalFrames / animation.frameRate) * 1000;

  function playControl(scrollDistance: number) {
    // if scrollDistance is positive number-> 1
    // if scrollDistance is negative number-> -1
    const delta = scrollDistance > 0 ? 1 : -1;

    if (delta < 0) {
      if (duration < totalDuration) {
        duration += config.speed;
      }
    } else {
      if (duration > 0) {
        duration -= config.speed;
      }
    }

    animation.goToAndStop(duration);
  }

  // mobile
  element.addEventListener(
    "touchstart",
    (e: TouchEvent) => {
      mobileStartY = e.touches[0].pageY;
    },
    false
  );

  element.addEventListener(
    "touchmove",
    (e: TouchEvent) => {
      eventCounter.mobile++;
      if (eventCounter.mobile % config.mobileEventRate !== 0) return;
      playControl(Math.trunc(mobileStartY - e.touches[0].pageY));
    },
    false
  );

  // pc
  element.addEventListener(
    "wheel",
    (e: WheelEvent) => {
      eventCounter.pc++;
      if (eventCounter.pc % config.pcEventRate !== 0) return;
      playControl(-e.deltaY);
    },
    false
  );
}
