block('tradein').elem('list-item').content()(function() {
    return [
        {
            block: 'tradein-car',
            data: this.ctx.data
        }
    ];
});
