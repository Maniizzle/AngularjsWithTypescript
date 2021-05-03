module app.common {

  export  interface IDataAccessService {
        getProductResource(): ng.resource.IResourceClass<IProductResource>;

    }

    interface IProductResource extends ng.resource.IResource<app.domain.IProduct> {

    }

    export class DataAccessService implements IDataAccessService {


        //note the service injected arrangement must be inline with how it was injected in the constructor
        static $inject = ["$resource"]
        constructor(private $resource: ng.resource.IResourceService) {}

        getProductResource():ng.resource.IResourceClass<IProductResource> {
            return this.$resource("/api/products/:productId");
        }


    }
    //registering dataaccess service to angular
    angular.module('common.services').service('dataAccessService', DataAccessService);
}