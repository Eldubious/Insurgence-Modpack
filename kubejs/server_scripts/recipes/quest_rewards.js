// Remove recipes for items meant to be rewards for quests
ServerEvents.recipes(event => {

    // Winemaker's Set
    event.remove({id: 'vinery:winemaker_boots'})
    event.remove({id: 'vinery:winemaker_leggings'})
    event.remove({id: 'vinery:winemaker_apron'})
    event.remove({id: 'vinery:straw_hat'})
})