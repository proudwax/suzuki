block('car-page')(

content()(function() {
    var id = Math.random() * this.data.length,
        data = this.data[parseInt(id)];

    return [
       {
           elem: 'header',
           content: [
               {
                   elem: 'title',
                   content: data.brand.name + ' ' + data.model.name
               }
           ]
       },
       {
           elem: 'container',
           content: [
               {
                   elem: 'content',
                   elemMods: { left: true },
                   content: [
                       {
                           block: 'car-slider',
                           data: data
                       }
                   ]
               },
               {
                   elem: 'content',
                   elemMods: { right: true },
                   content: [
                        {
                            block: 'car-details',
                            mods: { type: 'column' },
                            data: data
                        }
                   ]
               }
           ]
       }
   ];
})
);
