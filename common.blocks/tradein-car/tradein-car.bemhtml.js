block('tradein-car')(
    tag()('a'),

    addAttrs()(_ => {
        return {
            href: '#1'
        }
    }),

    elem('title')(
        tag()('h3')
    )
);
