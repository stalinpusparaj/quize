import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { ErrorResponse, HealthStatus, SurveyInput, SurveyStats, SurveySubmission } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getSubmitSurveyUrl: () => string;
/**
 * Store a completed GrowthOS Business MRI survey submission
 * @summary Submit survey responses
 */
export declare const submitSurvey: (surveyInput: SurveyInput, options?: RequestInit) => Promise<SurveySubmission>;
export declare const getSubmitSurveyMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitSurvey>>, TError, {
        data: BodyType<SurveyInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof submitSurvey>>, TError, {
    data: BodyType<SurveyInput>;
}, TContext>;
export type SubmitSurveyMutationResult = NonNullable<Awaited<ReturnType<typeof submitSurvey>>>;
export type SubmitSurveyMutationBody = BodyType<SurveyInput>;
export type SubmitSurveyMutationError = ErrorType<ErrorResponse>;
/**
* @summary Submit survey responses
*/
export declare const useSubmitSurvey: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitSurvey>>, TError, {
        data: BodyType<SurveyInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof submitSurvey>>, TError, {
    data: BodyType<SurveyInput>;
}, TContext>;
export declare const getGetSurveyStatsUrl: () => string;
/**
 * Returns aggregate counts and breakdowns across all submissions
 * @summary Get aggregate survey statistics
 */
export declare const getSurveyStats: (options?: RequestInit) => Promise<SurveyStats>;
export declare const getGetSurveyStatsQueryKey: () => readonly ["/api/survey/stats"];
export declare const getGetSurveyStatsQueryOptions: <TData = Awaited<ReturnType<typeof getSurveyStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSurveyStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSurveyStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSurveyStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getSurveyStats>>>;
export type GetSurveyStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get aggregate survey statistics
 */
export declare function useGetSurveyStats<TData = Awaited<ReturnType<typeof getSurveyStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSurveyStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map