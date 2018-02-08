block('cars').elem('list-item').content()(function() {
    return [
        {
            block: 'car',
            data: this.ctx.data
        }
    ];
});
