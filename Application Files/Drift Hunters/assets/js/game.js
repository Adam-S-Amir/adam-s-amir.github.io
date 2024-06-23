var gameInstance;

gameInstance = UnityLoader.instantiate("gameContainer", "./assets/lib/lib.json", {
  onProgress: UnityProgress,
  Module: {
    onRuntimeInitialized: function () {
      UnityProgress(gameInstance, "complete");
    },
  },
});
