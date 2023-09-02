export default {
  props: ["isButtonDisabled", "isChosen"],
  template: `
    <button class="{
      'bg-gray-200 hover:bg-gray-400 border-rounded px-5 py-2:false':true
    }">
        <slot/>
    </button>
    `,

  props: {
    type: {
      type: String,
      default: primary,
    },
  },
};
