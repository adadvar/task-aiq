# Task Implementation Steps

## 1. Adding Shabnam Font

- Imported the Shabnam font via its CSS file in `global.ts` using `import "../../public/fonts/shabnam/shabnam-font.css";`.
- Applied the Shabnam font to all page elements using the `*` selector.
- Also configured the scrollbar style in this section.

## 2. Creating the FeaturesSection Component

- Created the `FeaturesSection` folder and `index.ts` file to create the main component for the features section.

## 3. Creating the SegmentedSection Component

- Created the `SegmentedSection` component to implement the segmented section.
- Used the `Segmented` component from the Ant Design library to display the segmented section.
- Transformed the showcase data from `landingData.features.showcase` into `label` and `value` pairs for use with the `Segmented` component.
- Managed the selected item's state using `onChange`.
- Displayed the active item in the segmented section using `value`.

## 4. Creating the VideoCarouselSection Component

- Created the `VideoCarouselSection` component to implement the Ant Design carousel.
- Created the `findIndex` function to find the index of the selected item.
- Used `useEffect` to navigate to the corresponding video index in the carousel when the selected item in the segmented section changes.
- Used the `Carousel` component from the Ant Design library to display the videos.
- Displayed the videos in the carousel using the `VideoItem` component.
- Used the `useScrollAnimation` hook to add a scroll effect to the `VideoCarouselSection` component.
- Used `memo` from React to memoize the `VideoCarouselSection` component.

## 5. Creating the VideoItem Component

- Created the `VideoItem` component to display each video.
- Created the `nextShowCase` function to find the next item in the segmented section.
- Displayed the video using the `video` tag.
- Used `onEnded` to navigate to the next video when the current video finishes.
- Used `setSelectedFeature` to activate the next item in the segmented section.

## 6. Adding Scroll Effect

- The scroll effect includes rotation on the X-axis and translation on the Y-axis.
