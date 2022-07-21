const {expect} = require('chai');

const PaginationHelper = require('../../src/pagination_helper/paginationHelper')

describe("PaginationHelper", function () {

    describe('itemCount', function () {

        it('should calculate itemCount for numbers', function () {
            const paginationHelper = new PaginationHelper([1, 2, 3, 4, 5], 1)

            expect(paginationHelper.itemCount()).to.equal(5)
        })

        it('should calculate itemCount for other collections', function () {
            const paginationHelper = new PaginationHelper("abcdef", 1)

            expect(paginationHelper.itemCount()).to.equal(6)
        })
    })

    describe('pageCount', function () {

        it('should calculate pageCount for 5 items per page', function () {
            const paginationHelper = new PaginationHelper([1, 2, 3, 4, 5], 5)

            expect(paginationHelper.pageCount()).to.equal(1)
        })

        it('should calculate pageCount for 3 items per page', function () {
            const paginationHelper = new PaginationHelper([1, 2, 3, 4, 5], 3)

            expect(paginationHelper.pageCount()).to.equal(2)
        })

        it('should calculate pageCount for 2 items per page', function () {
            const paginationHelper = new PaginationHelper([1, 2, 3, 4, 5], 2)

            expect(paginationHelper.pageCount()).to.equal(3)
        })

        it('should calculate pageCount for 1 items per page', function () {
            const paginationHelper = new PaginationHelper([1, 2, 3, 4, 5], 1)

            expect(paginationHelper.pageCount()).to.equal(5)
        })
    })

    describe('pageItemCount', function () {

        describe('when 5 items per page', function () {
            let paginationHelper

            beforeEach(function () {
                paginationHelper = new PaginationHelper([1, 2, 3, 4, 5], 5)
            });

            it('should calculate pageItemCount at start page', function () {
                expect(paginationHelper.pageItemCount(0)).to.equal(5)
            })

            it('should calculate pageItemCount at second page', function () {
                expect(paginationHelper.pageItemCount(1)).to.equal(-1)
            })
        });

        describe('when 3 items per page', function () {
            let paginationHelper

            beforeEach(function () {
                paginationHelper = new PaginationHelper([1, 2, 3, 4, 5], 3)
            });

            it('should calculate pageItemCount at start page', function () {
                const paginationHelper = new PaginationHelper([1, 2, 3, 4, 5], 3)

                expect(paginationHelper.pageItemCount(0)).to.equal(3)
            })

            it('should calculate pageItemCount at second page', function () {
                const paginationHelper = new PaginationHelper([1, 2, 3, 4, 5], 3)

                expect(paginationHelper.pageItemCount(1)).to.equal(2)
            })
        })
    })

    describe('pageIndex', function () {

        describe('when 5 items perPage', function () {
            let paginationHelper

            beforeEach(function () {
                paginationHelper = new PaginationHelper(['A', 'B', 'C', 'D', 'E'], 5)
            });

            it('should calculate pageIndex for item 0', function () {
                expect(paginationHelper.pageIndex(0)).to.equal(0)
            })

            it('should calculate pageIndex for item 3', function () {
                expect(paginationHelper.pageIndex(3)).to.equal(0)
            })
        });

        describe('when 2 items per page', function () {
            let paginationHelper

            beforeEach(function () {
                paginationHelper = new PaginationHelper(['A', 'B', 'C', 'D', 'E'], 2)
            });

            it('should calculate pageIndex for item 3', function () {
                expect(paginationHelper.pageIndex(3)).to.equal(1)
            })

            it('should calculate pageIndex for item 8', function () {
                expect(paginationHelper.pageIndex(8)).to.equal(-1)
            })
        })
    })
})
